import { Link } from "react-router-dom";
import Logo from "../images/logo.svg";
import Stack from "react-bootstrap/Stack";
import background from "../images/background.png";
const Header = () => {
  return (
    <header
      style={{
        backgroundImage: ` url(${background})`,
        backgroundRepeat: "no-repeat",
        height: "208px",
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
          <Link to="/">Home</Link>
        </div>
        <div>
          {" "}
          <Link to="/blog" style={{ marginRight: "162px" }}>
            Blog
          </Link>
        </div>
      </Stack>
    </header>
  );
};
export default Header;
