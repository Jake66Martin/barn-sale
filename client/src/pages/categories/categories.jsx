import "./categories.css";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { CATEGORIES } from "../../utils/queries";
import { CATEGORY } from "../../utils/queries";
import { useParams, Link } from "react-router-dom";

export default function Categories() {
  let { id } = useParams();
  const [limit, setLimit] = useState(8);
  const [offset, setOffset] = useState(0);
  const [page, setPage] = useState(1);

  const {
    loading: paginationLoad,
    error: paginationError,
    data: paginationItems,
  } = useQuery(CATEGORIES, {
    variables: { categoryId: id, limit, offset },
  });

  const {
    loading: itemsLoad,
    error: itemsError,
    data: allItems,
  } = useQuery(CATEGORY, {
    variables: { categoryId: id },
  });

  const numberOfPages = allItems?.category.length / 8;
  const pagesRequired = Math.ceil(numberOfPages);

  console.log(numberOfPages);

  let yes = paginationItems?.categories || [];

  const itemData = [];

  yes?.forEach((item) => {
    const newItem = { ...item };

    try {
      newItem.image = item.image.map((url) => url.slice(1, -1));

      itemData.push(newItem);
    } catch (error) {
      console.error("Error handling item:", error);
    }
  });

  function clickPlus() {
    if (page < pagesRequired) {
      setOffset(offset + limit);
      setPage(page + 1);
    } else {
      console.log("No data available.");
    }
  }

  function clickNegative() {
    if (page > 1) {
      setPage(page - 1);
      setOffset(offset - limit);
    } else {
      console.log("Page number cannot go below 1.");
    }
  }

  console.log(allItems?.category.length);

  console.log(paginationItems?.categories);

  console.log(itemData)

  return (
    // <div className="c-height">
    //   <div className=''>
    //     <div className="d-flex flex-wrap justify-content-center align-items-center">
    //       {paginationItems?.categories &&
    //         paginationItems?.categories.map((item) => (
    //           <div
    //             key={item._id}
    //             className="card d-flex"
    //             style={{ width: "18rem", margin: "20px" }}
    //           >
    //             <img src={item.image} className="card-img-top" alt="item" />
    //             <div className="card-body align-self-center">
    //               <h5 className="card-title">{item.item}</h5>
    //             </div>
    //             <div className="card-body align-self-center">
    //               <a href="#" className="card-link">
    //                 Card link
    //               </a>
    //             </div>
    //           </div>
    //         ))}
    //     </div>
    //   </div>
    //   <div className="d-flex justify-content-evenly m-3">
    //     <button
    //       className="btn btn-outline-danger"
    //       onClick={() => clickNegative()}
    //     >
    //       Previous
    //     </button>
    //     <div
    //       style={{
    //         width: "30px",
    //         height: "30px",
    //         backgroundColor: "red",
    //         borderRadius: "50%",
    //       }}
    //       className="d-flex justify-content-center"
    //     >
    //       <p style={{ color: "white" }}>{page}</p>
    //     </div>
    //     <button className="btn btn-outline-danger" onClick={() => clickPlus()}>
    //       Next
    //     </button>
    //   </div>
    // </div>

    <div className="i-height">
      {itemData.length > 0 ? (
        <div>
          <div className="d-flex flex-wrap justify-content-center align-items-center">
            {itemData &&
              itemData.map((item) => (
                <div
                  key={item._id}
                  className="card d-flex"
                  style={{ width: "18rem", margin: "20px" }}
                >
                  <img
                    src={item.image[0]}
                    className="card-img-top img-height"
                    alt="item"
                  />
                  <div className="card-body align-self-center">
                    <h5 className="card-title">{item.item}</h5>
                  </div>
                  <div className="card-body align-self-center">
                    <Link to={`/ViewItem/${item._id}`} className="card-link">
                      View item
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ) : (
        <div className="i-height d-flex justify-content-center">
          <div className="d-flex flex-wrap justify-content-center align-items-center">
            <h2 className='t-align'>No items available</h2>
          </div>
        </div>
      )}

      <div className="d-flex justify-content-evenly m-3">
        <button
          className="btn btn-outline-danger"
          onClick={() => clickNegative()}
        >
          Previous
        </button>
        <div
          style={{
            width: "30px",
            height: "30px",
            backgroundColor: "red",
            borderRadius: "50%",
          }}
          className="d-flex justify-content-center"
        >
          <p style={{ color: "white" }}>{page}</p>
        </div>
        <button className="btn btn-outline-danger" onClick={() => clickPlus()}>
          Next
        </button>
      </div>
    </div>
  );
}
