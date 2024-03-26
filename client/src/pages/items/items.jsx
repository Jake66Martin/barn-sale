import { useQuery } from "@apollo/client";
import { ITEMS_SUB } from "../../utils/queries";
import { useParams } from "react-router-dom";
import "./items.css";

export default function Items() {
  let { id } = useParams();

  const { loading, error, data } = useQuery(ITEMS_SUB, {
    variables: { subcategoryId: id },
  });

  console.log(data?.itemsByCategory);

  return (
    <div className="item-height">
      <div className="cardbox-height">
        <div className="d-flex">
          {data?.itemsByCategory &&
            data?.itemsByCategory.map((item) => (
              <div
                key={item._id}
                className="card"
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
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li className="page-item">
            <a className="page-link" href="#">
              Previous
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
      </div>
    </div>
  );
}
