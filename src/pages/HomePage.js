import Bloglist from "../components/BlogList";
import Postblog from "../components/PostBlog";
const Homepage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4  ">
          <Postblog />
        </div>
        <div className="col-7">
          <Bloglist />
        </div>
      </div>
    </div>
  );
};
export default Homepage;
