import styles from "./viewitem2.module.css"
import {useQuery} from '@apollo/client'
import { useParams } from "react-router-dom";
import { ITEM_ID } from "../../utils/queries";




export default function Viewitem2() {

    let {id} = useParams();

    const {loading, error, data} = useQuery(ITEM_ID,{
        variables: {id: id}
    });

    console.log(data?.itemById)

    function addToCart(item) {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];

        // Check if the item's ID is already in the cart
        const itemExists = cart.includes(item._id);
    
        // Add the item's ID if it doesn't already exist in the cart
        if (!itemExists) {
            cart.push(item._id);
            localStorage.setItem("cart", JSON.stringify(cart));
            console.log("Item added to cart:", item._id);
        } else {
            console.log("Item is already in the cart:", item._id);
        }
    }

    return (
        <section className={`${styles.maingrid}`}>
            <div className={`${styles.cell1}`}>
                <div className={`${styles.pagecell}`}></div>
                <div className={`${styles.imgcell}`}>
                <img src='/garage.jpg' className={`${styles.mainimage}`}/>
                </div>
                <div className={`${styles.altimgcell}`}>
                   <div style={{display: 'flex'}}>
                    <img src='/garage.jpg' className={`${styles.imgsize}`}/>
                   </div>
                   <div style={{display: 'flex', justifyContent: 'center'}}>
                   <img src='/garage.jpg' className={`${styles.imgsize}`}/>
                   </div>
                   <div style={{display: 'flex', justifyContent: 'end'}}>
                   <img src='/garage.jpg' className={`${styles.imgsize}`}/>
                   </div>
                </div>
                
            </div>
            <div className={`${styles.cell2}`}>
                <div className={`${styles.namecell}`}>
                    <p>{data?.itemById?.item}</p>
                    <p>{data?.itemById?.price}.00$</p>
                </div>
                <div className={`${styles.buttoncell}`}>
                    <button onClick={() => addToCart(data?.itemById)}>Add To Cart</button>
                </div>
                <div className={`${styles.descriptioncell}`}>
                    <p>{data?.itemById?.description}</p>
                </div>
            </div>
        </section>
    )
}