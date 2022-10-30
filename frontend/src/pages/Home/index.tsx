import Login from "./Login";
import "./styles.css";
import { ReactComponent as ImgLogin } from "../../assets/images/login.svg";

const Home = () => (
  <div className="container main-container">
    <div className="content">
      <h1>Avalie Filmes</h1>
      <p>Diga o que você achou do seu filme faforito</p>
      <div className="img-login">
        <ImgLogin />
      </div>
    </div>
    <div className="login">
      <Login />
    </div>
  </div>
);

export default Home;
