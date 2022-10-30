import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthContext";
import { getTokenData, isAuthenticated } from "../../utils/auth";
import { removeAuthData } from "../../utils/storage";
import "./styles.css";

const Navbar = () => {
  const navigate = useNavigate();
  const { authContextData, setAuthContextData } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthContextData({
        authenticated: true,
        tokenData: getTokenData(),
      });
    } else {
      setAuthContextData({
        authenticated: false,
      });
    }
  }, [setAuthContextData]);

  const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    removeAuthData();
    setAuthContextData({
      authenticated: false,
    });
    navigate("/", { replace: true });
  };

  return (
    <nav className="navbar bg-primary main-nav">
      <div className="container">
        <div className="nav-logo-text">
          <Link to="/movies">MovieFlix</Link>
        </div>
        <div className="nav-login-logout">
          {authContextData.authenticated ? (
            <>
              <span>{authContextData.tokenData?.user_name}</span>
              <a href="#logout" onClick={handleLogoutClick}>
                LOGOUT
              </a>
            </>
          ) : (
            <Link to="/">LOGIN</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
