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
      debugger;
      const res = await axios.get(
        `https://frontend-case-api.sbdev.nl/api/posts?page=${currentPage}&perPage=8`,
        {
          headers: {
            token: "pj11daaQRz7zUIH56B9Z",
          },
        }
      );
      console.log(res);
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
    <div className="container-sm">
      <div className="blogContainer ">
        <div className="row">
          {blogs ? (
            blogs.map((item) => {
              return (
                <div className="col-3">
                  <BlogCard
                    key={item.id}
                    img_url={item.img_url}
                    category={item.category.name}
                    title={item.title}
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
            <div className="pagination justify-content-center">
              <Pagination>
                {/* <Pagination.Prev
                  disabled={currentPage === 1}
                  onClick={() => handlePageChange(currentPage - 1)}
                /> */}

                {[...Array(numberOfPages)].map((_, index) => {
                  const pageNumber = index + 1;
                  //const offset = Math.floor(currentPage / 5) * 5;
                  //const displayPageNumber = offset + pageNumber;

                  //return (
                  // <Pagination.Item
                  //   key={displayPageNumber}
                  //   active={currentPage === displayPageNumber}
                  //   onClick={() => handlePageChange(displayPageNumber)}
                  // >
                  //   {displayPageNumber}
                  // </Pagination.Item>
                  // );
                  // Display the first page number
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
                    // Display ellipses if necessary
                    if (pageNumber === currentPage - 2 && currentPage > 4) {
                      return <Pagination.Ellipsis key="ellipsis-prev" />;
                    } else {
                      if (
                        // Display the current page number
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
                          // Display ellipses if necessary
                          pageNumber === currentPage + 2 &&
                          currentPage < numberOfPages - 3
                        ) {
                          return <Pagination.Ellipsis key="ellipsis-next" />;
                        } else {
                          // Display the last page number
                          if (pageNumber === numberOfPages) {
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
                />
              </Pagination>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};
export default Blogpage;
