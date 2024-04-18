import "./search.css";
import { useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import { SEARCH, SEARCH_ITEM } from "../../utils/queries";
import { Link } from 'react-router-dom'


export default function Search() {
  const [limit, setLimit] = useState(8);
  const [offset, setOffset] = useState(0);
  const [page, setPage] = useState(1);
  const [item, setItem] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setItem(value)
    setPage(1)
  };

  

  const { loading: loadedItems, error: errorItems, data: renderedItems } = useQuery(SEARCH, {
    variables: {item, limit, offset },
    enabled: formSubmitted
  });



  const { loading: queryLoad, error: queryError, data: queryData} = useQuery(SEARCH_ITEM,{
    variables: {item}
  });

  const numberOfPages = ((queryData?.searchItem.length)/8)
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


  return (
    <div className="t-height overflow-cnt">
      <div>
      <div className="bar d-flex align-items-center justify-content-center">
        <form className="d-flex f-width">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            name="item"
            onChange={handleInputChange}
          />
        </form>
      </div>
      <div className="items-height">
        <div className="cardbox-height">
          <div className="d-flex flex-wrap justify-content-center align-items-center">
            {renderedItems?.searchByItem &&
              renderedItems?.searchByItem.map((items) => (
                <div
                  key={items._id}
                  className="card d-flex"
                  style={{ width: "18rem", margin: "20px" }}
                >
                  <img src={items.image} className="card-img-top img-height" alt="..." />
                  <div className="card-body align-self-center">
                    <h5 className="card-title">{items.item}</h5>
                  </div>
                  <div className="card-body align-self-center">
                  <Link to={`/ViewItem/${items._id}`} className="card-link">
                    View item
                  </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className='scroll-height d-flex justify-content-center align-items-center'>
      <div className="d-flex justify-content-center align-items-center">
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
    </div>
  );
}
