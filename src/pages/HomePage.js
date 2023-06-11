import Bloglist from "../components/BlogList";
import Postblog from "../components/PostBlog";
const Homepage = () => {
  return (
    <div className="container text-left">
      <div>
        <div className="row">
          <div className="col-sm-5">
            <Bloglist />
          </div>
          <div className="col-sm-6">
            <Postblog />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Homepage;
