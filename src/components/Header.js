import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../images/logo.svg";
import Stack from "react-bootstrap/Stack";
import background from "../images/background.png";
const Header = () => {
  const location = useLocation();
  return (
    <header
      style={{
        backgroundImage: ` url(${background})`,
        backgroundRepeat: "no-repeat",
        height: "288px",
        marginRight: "150px",
        marginLeft: "150px",
        backgroundSize: "cover",
      }}
    >
      <Stack direction="horizontal" gap={3}>
        <div>
          <img
            src={Logo}
            alt="Social Brothers Logo"
            style={{
              width: "240px",
              height: "57px",
              marginLeft: "162px",
              marginTop: "32px",
            }}
          ></img>
        </div>
        <div className="  ms-auto">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
        </div>
        <div>
          {" "}
          <NavLink
            className="nav-link"
            to="/blog"
            style={{ marginRight: "162px" }}
          >
            Blog
          </NavLink>
        </div>
      </Stack>
      <div className="Blog-text">
        {location.pathname === "/blog" && <h1>Blog</h1>}
      </div>
    </header>
  );
};
export default Header;
