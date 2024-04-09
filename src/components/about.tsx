import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreasePage,
  fetchData,
  incrementPage,
  pagination,
} from "../action/action";

import "./_about.scss";

export const About = () => {
  const { data, loading, error } = useSelector((state:any) => state.apiShow);
  const { currentPage, perPage } = useSelector((state:any) => state.pagination);

  const dispatch = useDispatch();

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    dispatch(fetchData(signal));

    return () => {
      // Cleanup function to abort the request when the component unmounts
      abortController.abort();
    };
  }, [dispatch]);
  
  if (loading) {
    return <h1>Loading......</h1>;
  }

  const handlePrevious = () => {
    dispatch(decreasePage());
  };
  const handleNext = () => {
    dispatch(incrementPage());
  };

  const startIndex = (currentPage - 1) * perPage;
  const lastIndex = startIndex + perPage;
  const displayData = data.slice(startIndex, lastIndex);

  const totalPage = Math.ceil(data.length / perPage);

  return (
    <>
      <div className="main-container">
        <div className="pagination-container">
          {/* <span>Current Page:{currentPage} </span> */}
          <button
            className={currentPage === 1 ? "disabled" : "previous-btn"}
            onClick={handlePrevious}
            disabled={currentPage === 1}
          >
            &lt;
          </button>

          {Array(totalPage)
            .fill(0)
            .map((a, index) => (
              <button
                className="index-btn"
                style={{
                  background: currentPage === index + 1 ? "cornflowerblue" : "",
                  color: currentPage === index + 1 ? "white" : "",
                }}
                onClick={() =>
                  dispatch(
                    pagination({ currentPage: index + 1, perPage: perPage })
                  )
                }
              >
                {index + 1}
              </button>
            ))}

          <button
            className={totalPage === currentPage ? "disabled" : "next-btn"}
            onClick={handleNext}
            disabled={totalPage === currentPage}
          >
            &gt;
          </button>
        </div>

        <div className="list-container">
          {displayData.map((pro:any) => {
            return (
              <div className="content-container">
                <p>id{pro.id}</p>
                <p>title{pro.title}</p>
                <p>body{pro.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
