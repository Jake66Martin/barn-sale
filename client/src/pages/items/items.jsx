import { useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import { ITEMS_SUB, ITEMS } from "../../utils/queries";
import { useParams, Link } from "react-router-dom";
import "./items.css";

export default function Items() {
  let { id } = useParams();
  const [limit, setLimit] = useState(8);
  const [offset, setOffset] = useState(0);
  const [page, setPage] = useState(1);
  const [properData, setProperData] = useState('')

  const {
    loading: paginationLoad,
    error: paginationError,
    data: paginationItems,
  } = useQuery(ITEMS_SUB, {
    variables: { subcategoryId: id, limit, offset },
  });

  const {
    loading: itemsLoad,
    error: itemsError,
    data: allItems,
  } = useQuery(ITEMS, {
    variables: { subcategoryId: id },
  });

  
  let yes = paginationItems?.itemsByCategory || []


 const itemData = [];

yes?.forEach(item => {
  const newItem = { ...item };
  

try {
  newItem.image = item.image.map(url => url.slice(1, -1));

  itemData.push(newItem);
} catch (error) {
  console.error('Error handling item:', error);
}
});



  const numberOfPages = allItems?.allItemsByCategory.length / 8;
  const pagesRequired = Math.ceil(numberOfPages);


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

  return (
    <div className="height overflow-cnt">
      <div>
        <div className="d-flex flex-wrap justify-content-center align-items-center">
          {itemData && itemData.map((item) => (
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
      <div className="d-flex justify-content-center my-3">
        <button
          className="btn btn-outline-danger"
          onClick={() => clickNegative()}
        >
          Previous
        </button>
        <div
          style={{ width: "30px" }}
          className="d-flex justify-content-center"
        >
          <p>{page}</p>
        </div>
        <button className="btn btn-outline-danger" onClick={() => clickPlus()}>
          Next
        </button>
      </div>
    </div>
  );
}
