import { Movie } from "../../../types/movie";
import "./styles.css";

type Props = {
  movie: Movie | undefined;
};

export const MovieDetailsCard = ({ movie }: Props) => {
  return (
    <div className="mdc-container row">
      <div className="col-lg-12 col-xl-6 mdc-img-container">
        <img src={movie?.imgUrl} alt={movie?.title} />
      </div>
      <div className="col-lg-12 col-xl-6">
        <h1 className="mdc-title">{movie?.title}</h1>
        <h2 className="mdc-year">{movie?.year}</h2>
        <h3 className="mdc-subtitle">{movie?.subTitle}</h3>
        <div className="mdc-synopsis-container">
          <p className="mdc-synopsis">{movie?.synopsis}</p>
        </div>
      </div>
    </div>
  );
};
