import { AxiosRequestConfig } from "axios";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Pagination } from "../../components/Pagination";
import { Movie } from "../../types/movie";
import { SpringPage } from "../../types/vendor/spring";
import { requestBackend } from "../../utils/requests";
import { MovieCard } from "./MovieCard";
import { MovieFilterData, Navbar } from "./Navbar";
import "./styles.css";

type ControlComponentsData = {
  activePage: number;
  filterData: MovieFilterData;
};

const Movies = () => {
  const [pageMovies, setPageMovies] = useState<SpringPage<Movie>>();
  const [controlComponentsData, setControlComponentsData] =
    useState<ControlComponentsData>({
      activePage: 0,
      filterData: { genre: { id: 0, name: "" } },
    });

  const getMovies = useCallback(() => {
    const config: AxiosRequestConfig = {
      method: "GET",
      url: `/movies`,
      params: {
        page: controlComponentsData.activePage,
        size: 4,
        sort: "title,asc",
        genreId: controlComponentsData.filterData.genre?.id,
      },
      withCredentials: true,
    };

    requestBackend(config).then((response) => setPageMovies(response.data));
  }, [controlComponentsData]);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  const handleOnsubmitFilter = (data: MovieFilterData) => {
    setControlComponentsData({
      activePage: 0,
      filterData: data,
    });
  };

  const handlePageChange = (pageNumber: number) => {
    setControlComponentsData({
      activePage: pageNumber,
      filterData: controlComponentsData.filterData,
    });
  };

  return (
    <div className="container m-container">
      <Navbar onSubmitFilter={handleOnsubmitFilter} />
      <div className="row">
        {pageMovies?.content?.map((movie) => (
          <div className="col-sm-6 col-xl-3" key={movie.id}>
            <Link to={"/movies/" + movie.id}>
              <MovieCard movie={movie} />
            </Link>
          </div>
        ))}
      </div>
      <div className="row">
        <Pagination
          pageCount={pageMovies ? pageMovies.totalPages : 0}
          range={3}
          onChange={handlePageChange}
          forcePage={pageMovies?.number}
        />
      </div>
    </div>
  );
};
export default Movies;
