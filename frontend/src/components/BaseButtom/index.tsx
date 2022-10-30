import "./styles.css";

type Props = {
  text: string;
  onClick?: () => void;
};

const BaseButtom = ({ text, onClick }: Props) => {
  return (
    <div className="btn-container">
      <button className="btn btn-primary" onClick={onClick}>
        <h6>{text}</h6>
      </button>
    </div>
  );
};

export default BaseButtom;
