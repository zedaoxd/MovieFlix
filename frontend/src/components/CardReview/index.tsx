import { ReactComponent as StarLogo } from "../../assets/images/star.svg";
import "./styles.css";

type Props = {
  name: string;
  comment: string;
};

const CardReview = ({ name, comment }: Props) => {
  return (
    <div className="cr-container">
      <StarLogo />
      <h3>{name}</h3>
      <p>{comment}</p>
    </div>
  );
};

export default CardReview;
