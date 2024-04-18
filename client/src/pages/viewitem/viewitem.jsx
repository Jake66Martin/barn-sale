import "./viewitem.css";
import { useQuery } from "@apollo/client";
import { ITEM_ID } from "../../utils/queries";
import { useParams } from "react-router-dom";

export default function ViewItem() {
  let { id } = useParams();

  const { loading, error, data } = useQuery(ITEM_ID, {
    variables: { id: id },
  });

  return (
    <div className="t-height">
      <div className='d-flex flex-column align-items-center'>
        <img src={data?.itemById.image} className='align-self-center my-3 img-height' />
        <h1>{data?.itemById.item}</h1>
        <p>{data?.itemById.description}</p>
        <p>{data?.itemById.price}$</p>
        <p>{data?.itemById.location}</p>
      </div>
    </div>
  );
}
