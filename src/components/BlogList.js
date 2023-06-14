import { useEffect, useState } from "react";
import axios from "axios";
import BlogCard from "../components/BlogCard";

const Bloglist = () => {
  const [post, setPost] = useState();
  useEffect(() => {
    async function getPost() {
      try {
        const res = await axios.get(
          "https://frontend-case-api.sbdev.nl/api/posts?page=1&perPage=4&sortBy=created_at&sortDirection=desc&searchPhrase=test ber&categoryId=1",
          {
            headers: {
              token: "pj11daaQRz7zUIH56B9Z",
            },
          }
        );
        setPost(res.data.data);
        console.log(res.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    getPost();
  }, []);
  return (
    <div className="bg-white">
      <div className="row justify-content-center m-4">
        {post ? (
          post.map((item) => {
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
        )}
        <button className="btn1">Meer laden</button>
      </div>
    </div>
  );
};
export default Bloglist;
