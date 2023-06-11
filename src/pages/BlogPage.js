import { useEffect, useState } from "react";
import axios from "axios";
import BlogCard from "../components/BlogCard";
import SweetPagination from "sweetpagination";
import Pagination from 'react-bootstrap/Pagination';

const Blogpage = () => {
  const [currentPageData, setCurrentPageData] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState([]);

  const [blogs, setBlogs] = useState([]);

  async function getPosts() {
    try {
      const res = await axios.get(
        `https://frontend-case-api.sbdev.nl/api/posts?page=1&perPage=8`,
        {
          headers: {
            token: "pj11daaQRz7zUIH56B9Z",
          },
        }
      );
      setBlogs(res.data.data);
        const totalPages=res.data.total
      for (let p = 1; p < totalPages; p++) {
        pages.push(p);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div
      className="blogContainer"
      style={{ display: "flex", justifyContent: "center" }}
    >
      {/* {blogs ? (
        blogs.map((item) => {
          return (
            <BlogCard
              key={item.id}
              img_url={item.img_url}
              category={item.category.name}
              title={item.title}
              content={item.content}
            />
          );
        })
      ) : (
        <p>Loading...</p>
      )} */}
      <div>
        {pages ? (
          <SweetPagination
            currentPageData={setCurrentPageData}
            getData={}
            navigation={true}
          />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};
export default Blogpage;
