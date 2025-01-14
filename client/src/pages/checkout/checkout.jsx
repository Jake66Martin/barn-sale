import styles from './checkout.module.css'

export default function Checkout(){

    return (
        <>
        <section className={`${styles.maingrid}`}>
            <div className={`${styles.cart}`}></div>
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
