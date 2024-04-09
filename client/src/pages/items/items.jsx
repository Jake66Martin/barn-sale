import { useQuery } from "@apollo/client";
import { useState } from "react";
import { ITEMS_SUB, ITEMS } from "../../utils/queries";
import { useParams } from "react-router-dom";
import "./items.css";

export default function Items() {
  let { id } = useParams();
  const [limit, setLimit] = useState(8);
  const [offset, setOffset] = useState(0);
  const [page, setPage] = useState(1);

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

  const numberOfPages = ((allItems?.allItemsByCategory.length)/8)
  const pagesRequired = Math.ceil(numberOfPages)

  function clickPlus() {
    if (page < pagesRequired) {
    setOffset(offset + limit);
    setPage(page + 1);
    } else {
      console.log('No data available.')
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

  

  console.log(allItems?.allItemsByCategory.length);

  console.log(paginationItems?.itemsByCategory);


  return (
    <div className="item-height">
      <div className="cardbox-height scroll-cnt">
        <div className="d-flex flex-wrap justify-content-center align-items-center">
          {paginationItems?.itemsByCategory &&
            paginationItems?.itemsByCategory.map((item) => (
              <div
                key={item._id}
                className="card d-flex"
                style={{ width: "18rem", margin: "20px" }}
              >
                <img src={item.image} className="card-img-top" alt="item" />
                <div className="card-body align-self-center">
                  <h5 className="card-title">{item.item}</h5>
                  <p className="card-text">{item.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item align-self-center">
                    {item.price}$
                  </li>
                </ul>
                <div className="card-body align-self-center">
                  <a href="#" className="card-link">
                    Card link
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="d-flex justify-content-center">
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
