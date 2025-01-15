import styles from './checkout.module.css';
import {useQuery} from '@apollo/client';
import { ALL_ITEMS_ID } from "../../utils/queries";




export default function Checkout(){
  
    const cartIds = JSON.parse(localStorage.getItem("cart")) || [];

    console.log("Cart IDs:", cartIds);

    
    const { loading, error, data } = useQuery(ALL_ITEMS_ID, {
        variables: { ids: cartIds },
        skip: cartIds.length === 0, // Skip the query if the cart is empty
    });

    console.log(data?.allItemsById)
     

   

   


    


    return (
        <>
        <section className={`${styles.maingrid}`}>
            <div className={`${styles.cart}`}>
                <div className={`${styles.check1}`}>
                    <p>Shopping Cart</p>
                    <p>items</p>
                </div>
                <div className={`${styles.check2}`}>
                {data?.allItemsById?.map(item => (
                <div key={item._id}>
                    <img src={item?.image} alt='item image' />
                    <p>{item?.item}</p>
                    <p>{item?.price} $</p>
                </div>
            ))}
                </div>
                <div className={`${styles.check3}`}>
                    <p>Continue Shopping</p>
                </div>
            </div>
            <div className={`${styles.summary}`}>
                <div></div>
                <div className={`${styles.mainsummary}`}>
                    <div><p>Order Summary</p></div>
                    <div>
                        <p>items</p>
                        <p>price</p>
                    </div>
                    <div>
                        <p>SHIPPING/PICKUP</p>
                        <select>
                            <option>Ship</option>
                            <option>Pickup</option>
                        </select>
                    </div>
                    <div>
                        <p>pick up or shipping</p>
                    </div>
                    <div>
                        <p>TOTAL COST</p>
                        <p>435345$</p>
                    </div>
                    <div>
                        <button>Checkout</button>
                    </div>
                </div>
                <div></div>
            </div>
        </section>
        </>
    )
}
