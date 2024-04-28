import "./viewitem.css";
import { useQuery } from "@apollo/client";
import { ITEM_ID } from "../../utils/queries";
import { useParams } from "react-router-dom";
import Swiping from '../../components/swiper/swiper'

export default function ViewItem() {
  let { id } = useParams();

  const { loading, error, data } = useQuery(ITEM_ID, {
    variables: { id: id },
  });


  return (
    <div className="d-flex flex-wrap justify-content-center align-items-center overflow-cnt">
      <div className="card d-flex" style={{ width: "18rem", margin: "20px" }}>
        
        <Swiping></Swiping>
        <div className="card-body align-self-center">
          <h5 className="card-title">{data?.itemById.item}</h5>
        </div>
        <div className="card-body align-self-center">
          <p>{data?.itemById.price}$</p>
        </div>
        <div className="card-body align-self-center">
          <p className='t-wrap'>{data?.itemById.description}</p>
        </div>
        <div className="card-body align-self-center">
          <p>{data?.itemById.location}</p>
        </div>
      </div>
    </div>
  );
}
