import "./search.css";
import { useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import { SEARCH } from "../../utils/queries";

export default function Search() {
  const [limit, setLimit] = useState(8);
  const [offset, setOffset] = useState(0);
  const [page, setPage] = useState(1);
  const [item, setItem] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    return name === "item" ? setItem(value) : console.log("Must input item.");
  };

  const search = (event) => {
    event.preventDefault();
    const { loading, error, data } = useQuery(SEARCH, {
      variables: { limit, offset },
    });

    return search;
  };

  // function clickPlus() {
  //   if (page < pagesRequired) {
  //   setOffset(offset + limit);
  //   setPage(page + 1);
  //   } else {
  //     console.log('No data available.')
  //   }
  // }

  // function clickNegative() {
  //   if (page > 1) {
  //     setPage(page - 1);
  //     setOffset(offset - limit);
  //   } else {
  //     console.log("Page number cannot go below 1.");
  //   }
  // }

  return (
    <div className="search-height">
      <div className="bar d-flex align-items-center justify-content-center">
        <form className="d-flex f-width" onSubmit={search}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            name="item"
            onChange={handleInputChange}
          />
          <button className="btn btn-outline-danger" type="submit">
            Search
          </button>
        </form>
      </div>
      <div className="items-height">
        <div className="cardbox-height">
          <div className="d-flex flex-wrap justify-content-center align-items-center">
            {search?.searchByItem &&
              search?.searchByItem.map((item) => (
                <div
                  key={item._id}
                  className="card d-flex"
                  style={{ width: "18rem", margin: "20px" }}
                >
                  <img src="..." className="card-img-top" alt="..." />
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
      </div>
      <div className='scroll-height'>
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
    </div>
  );
}
