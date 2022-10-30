import { Movie } from "../../../types/movie";
import "./styles.css";

type Props = {
  movie: Movie;
};

export const MovieCard = ({ movie }: Props) => {
  return (
    <div className="mc-container">
      <div className="mc-img-container">
        <img src={movie.imgUrl} alt={movie.title} />
      </div>
      <div className="mc-content-container">
        <h3 className="mc-title">{movie.title}</h3>
        <h4 className="mc-year">{movie.year}</h4>
        <p className="mc-description">{movie.subTitle}</p>
      </div>
    </div>
  );
};
