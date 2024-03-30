import './search.css'
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { SEARCH } from '../../utils/queries'


export default function Search() {
  const [limit, setLimit] = useState(8);
  const [offset, setOffset] = useState(0);
  const [page, setPage] = useState(1);

  const {
    loading,
    error,
    data,
  } = useQuery(SEARCH, {
    variables: { limit, offset },
  });
  
  return (
    <div className='search-height d-flex justify-content-center'>
      <div className='bar d-flex align-items-center'>
      <form className="d-flex f-width">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-danger" type="submit">
          Search
        </button>
      </form>
      </div>
      <div className='items-height'>
      <div className="cardbox-height">
        <div className="d-flex flex-wrap justify-content-center align-items-center">
          {data?.searchByItem &&
            data?.searchByItem.map((item) => (
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
    </div>
  );
}
