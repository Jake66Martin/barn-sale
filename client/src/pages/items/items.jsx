import { useQuery } from "@apollo/client";
import { useState } from "react";
import { ITEMS_SUB } from "../../utils/queries";
import { useParams } from "react-router-dom";
import "./items.css";

export default function Items() {
  let { id } = useParams();
  const [limit, setLimit] = useState(8);
  const [offset, setOffset] = useState(0);

  const { loading, error, data } = useQuery(ITEMS_SUB, {
    variables: { subcategoryId: id, limit, offset },
  });

  console.log(data?.itemsByCategory);

  return (
    <div className="item-height">
      <div className="cardbox-height scroll-cnt">
        <div className="d-flex flex-wrap justify-content-center align-items-center">
          {data?.itemsByCategory &&
            data?.itemsByCategory.map((item) => (
              <div
                key={item._id}
                className="card d-flex"
                style={{ width: "18rem", margin: "20px" }}
              >
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item.item}</h5>
                  <p className="card-text">{item.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">{item.price}$</li>
                </ul>
                <div className="card-body">
                  <a href="#" className="card-link">
                    Card link
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className='d-flex justify-content-center'>
      <button className='btn btn-outline-danger' onClick={() => setOffset(offset - limit)}>Previous</button>
      <button className='btn btn-outline-danger' onClick={() => setOffset(offset + limit)}>Next</button>
      </div>
    </div>
  );
}
