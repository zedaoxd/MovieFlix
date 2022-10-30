import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardEvaluation } from "../../components/CardEvaluation";
import CardReview from "../../components/CardReview";
import { Movie } from "../../types/movie";
import { Review } from "../../types/review";
import { hasAnyRoles } from "../../utils/auth";
import { requestBackend } from "../../utils/requests";
import { MovieDetailsCard } from "./MovieDetailsCard";
import "./styles.css";

const MovieDetails = () => {
  const { id } = useParams();

  const [reviews, setReviews] = useState<Review[]>([]);
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    requestBackend({
      method: "GET",
      url: `/movies/${id}/reviews`,
      withCredentials: true,
    }).then((response) => setReviews(response.data));

    requestBackend({
      method: "GET",
      url: `/movies/${id}`,
      withCredentials: true,
    }).then((response) => setMovie(response.data));
  }, [id]);

  const handleInsert = (review: Review) => {
    const clone = [...reviews];
    clone.push(review);
    setReviews(clone);
  };

  return (
    <div className="container">
      <div className="md-main-container">
        <MovieDetailsCard movie={movie} />
        {hasAnyRoles(["ROLE_MEMBER"]) && (
          <CardEvaluation onInsert={handleInsert} movieId={Number(id)} />
        )}
        <div className="md-container-comments">
          {reviews?.map((item) => (
            <CardReview
              name={item.user.name}
              comment={item.text}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
