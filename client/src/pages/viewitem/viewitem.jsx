import "./viewitem.css";
import { useQuery, useMutation } from "@apollo/client";
import { ITEM_ID } from "../../utils/queries";
import { useParams } from "react-router-dom";
import Swiping from "../../components/swiper/swiper";
import { REMOVE_ITEM } from "../../utils/mutations";
import Swal from 'sweetalert2';
import { ME } from '../../utils/queries'
import Auth from '../../utils/auth'



export default function ViewItem() {
  let { id } = useParams();
  const isAuthenticated = Auth.loggedIn();

  const [removeItem] = useMutation(REMOVE_ITEM)

  const { loading, error, data } = useQuery(ITEM_ID, {
    variables: { id: id },
  });

  const {loading: meLoad, error: meError, data: meData} = isAuthenticated ? useQuery(ME) : { loading: false, error: null, data: null };


  return (
    <div className='d-flex flex-column'>
      <div className='d-height'>
      {/* <Swiping></Swiping> */}
      </div>
      <div className='d-height'>
        <div className="d-flex flex-wrap justify-content-center align-items-center overflow-cnt">
          <div
            className="card d-flex"
            style={{ width: "18rem", margin: "20px" }}
          >
            <Swiping></Swiping>
            <div className="card-body align-self-center">
              <h5 className="card-title">{data?.itemById.item}</h5>
            </div>
            <div className="card-body align-self-center">
              <p>{data?.itemById.price}$</p>
            </div>
            <div className="card-body align-self-center">
              <p className="t-wrap">{data?.itemById.description}</p>
            </div>
            <div className="card-body align-self-center">
              <p>{data?.itemById.location}</p>
            </div>
          </div>
          
        </div>
      </div>
     {meData?.me && meData?.me.email === "jake66martin@hotmail.com" && (
      <button className="btn btn-danger btn-lg align-self-center" 
                                            onClick={() => {
                                                            removeItem({
                                                              variables: {
                                                                id: id
                                                              }
                                                            })
                                                            Swal.fire({
                                                                position: "center-center",
                                                                icon: "success",
                                                                title: "Item has been deleted.",
                                                                showConfirmButton: false,
                                                                timer: 2000,
                                                            });
                                                    }}>
                                        Delete Item
                                    </button>)
           }
    </div>
  );
}
