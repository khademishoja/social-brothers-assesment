import Bloglist from "../components/BlogList";
import Postblog from "../components/PostBlog";
const Homepage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-5  gy-5 gx-5 justify-content-center">
          <Postblog />
        </div>
        <div className="col-7 gy-5 ">
          <Bloglist />
        </div>
      </div>
    </div>
  );
};
export default Homepage;
