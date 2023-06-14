import { useEffect, useState } from "react";
import axios from "axios";
import BlogCard from "../components/BlogCard";
import Pagination from "react-bootstrap/Pagination";
const Blogpage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(1);

  const [blogs, setBlogs] = useState([]);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  async function getPosts() {
    try {
      const res = await axios.get(
        `https://frontend-case-api.sbdev.nl/api/posts?page=${currentPage}&perPage=8`,
        {
          headers: {
            token: "pj11daaQRz7zUIH56B9Z",
          },
        }
      );

      setBlogs(res.data.data);
      setNumberOfPages(res.data.last_page);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  useEffect(() => {
    getPosts();
  }, [currentPage]);

  return (
    <div
      className="container-sm"
      style={{ minHeight: "80vh", marginTop: "64px" }}
    >
      <div className="row ">
        {blogs ? (
          blogs.map((item) => {
            return (
              <div className="col-3">
                <BlogCard
                  key={item.id}
                  img_url={item.img_url}
                  category={item.category.name}
                  title={item.title}
                  createdAt={item.created_at}
                  content={item.content}
                />
              </div>
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className="row">
        {numberOfPages ? (
          <div className="pagination justify-content-center mt-4">
            <Pagination>
              {[...Array(numberOfPages)].map((_, index) => {
                const pageNumber = index + 1;
                if (pageNumber === 1) {
                  return (
                    <Pagination.Item
                      key={pageNumber}
                      active={currentPage === pageNumber}
                      onClick={() => handlePageChange(pageNumber)}
                    >
                      {pageNumber}
                    </Pagination.Item>
                  );
                } else {
                  if (pageNumber === currentPage - 2 && currentPage > 4) {
                    return <Pagination.Ellipsis key="ellipsis-prev" />;
                  } else {
                    if (
                      (pageNumber >= currentPage - 1 &&
                        pageNumber <= currentPage + 1) ||
                      (pageNumber === numberOfPages &&
                        currentPage === numberOfPages - 1)
                    ) {
                      return (
                        <Pagination.Item
                          key={pageNumber}
                          active={currentPage === pageNumber}
                          onClick={() => handlePageChange(pageNumber)}
                        >
                          {pageNumber}
                        </Pagination.Item>
                      );
                    } else {
                      if (
                        pageNumber === currentPage + 2 &&
                        currentPage < numberOfPages - 3
                      ) {
                        return <Pagination.Ellipsis key="ellipsis-next" />;
                      } else {
                        if (pageNumber === 20) {
                          return (
                            <Pagination.Item
                              key={pageNumber}
                              active={currentPage === pageNumber}
                              onClick={() => handlePageChange(pageNumber)}
                            >
                              {pageNumber}
                            </Pagination.Item>
                          );
                        }
                      }
                    }
                  }
                }
              })}
              <Pagination.Next
                disabled={currentPage === blogs}
                onClick={() => handlePageChange(currentPage + 1)}
                className="pagination_nextButton shadow-none"
              >
                Volgende Pagina &rarr;
              </Pagination.Next>
            </Pagination>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};
export default Blogpage;
