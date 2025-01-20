import styles from "./checkout.module.css";
import { useQuery } from "@apollo/client";
import { ALL_ITEMS_ID } from "../../utils/queries";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
  const [method, setMethod] = useState("Pickup");
  const [tax, setTax] = useState(0.00);
  const [total, setTotal] = useState(0.00)
  const [basePrice, setBasePrice] = useState(0.00)

  const navigate = useNavigate();







const handleChange = (e) => {
    const newMethod = e.target.value;
    setMethod(newMethod);  // Update method state
    calculateTax(basePrice, newMethod);  // Update tax state
    calculateTotal(basePrice, newMethod, tax);  // Update total state
  };




  const cartIds = JSON.parse(localStorage.getItem("cart")) || [];

  console.log("Cart IDs:", cartIds);








  const { loading, error, data } = useQuery(ALL_ITEMS_ID, {
    variables: { ids: cartIds },
  });




  console.log(data?.allItemsById);





useEffect(() => {
    if (data?.allItemsById?.length > 0) {
      
      let newBasePrice = 0;
      for (let i = 0; i < data?.allItemsById?.length; i++) {
        newBasePrice += data?.allItemsById[i]?.price || 0.00; 
      }
      setBasePrice(newBasePrice);
      
      
      calculateTax(newBasePrice, method);  // Update tax
      calculateTotal(newBasePrice, method, tax);  // Update total
    }
  }, [data, method]);  // Re-run when data or method changes




  console.log("Base Price:", basePrice);

  function calculateTax (basePrice, method) {

    let taxAmount = 0;

    if (method === "Pickup") {
        taxAmount = basePrice * 0.13
    } else if (method === "Front Door Delivery") {
       taxAmount = (basePrice + 45) * 0.13
    } else if (method === "Hands Free Delivery") {
    taxAmount = (basePrice + 95) * 0.13
    }

    setTax(taxAmount)
  }

  function calculateTotal (basePrice, method, tax) {
    
    let total = 0;
    
    if (method === "Pickup") {
    total = basePrice + tax;
    } else if (method === "Hands Free Delivery") {
        total = basePrice + tax + 95
    } else if (method === "Front Door Delivery") {
        total = basePrice + tax + 45
    }

    setTotal(total)
  }

  useEffect(() => {
    calculateTotal(basePrice, method, tax);
}, [tax, method]);



function removeItem(itemId) {
let cart = JSON.parse(localStorage.getItem('cart')) || [];

cart = cart.filter(id => id !== itemId);

localStorage.setItem('cart', JSON.stringify(cart));

window.location.reload()
}

function continueShopping() {
   
        navigate('/Browse');
      
}


useEffect(() => {
    if (data?.allItemsById?.length > 0) {
      // Calculate base price first
      let newBasePrice = 0;
      data.allItemsById.forEach(item => {
        newBasePrice += item.price || 0; // Safely add the price
      });
  
      // Recalculate total after base price is updated
      calculateTax(newBasePrice, method);  // Update tax based on new base price
      calculateTotal(newBasePrice, method, tax);  // Update total based on new base price and tax
    }
  }, [data, method, tax]); // Re-run when data, method, or tax changes

  return (
    <>
      <section className={`${styles.maingrid}`}>
        <div className={`${styles.cart}`}>
          <div className={`${styles.check1}`}>
            <p
              style={{
                alignSelf: "center",
                fontWeight: "500",
                fontSize: "20px",
              }}
              className={`${styles.textstyle}`}
            >
              Shopping Cart
            </p>
            <p
              style={{
                alignSelf: "center",
                position: "relative",
                right: "30px",
                fontWeight: "500",
                fontSize: "20px",
              }}
              className={`${styles.textstyle}`}
            >
              {data?.allItemsById.length} Items
            </p>
          </div>
          <div style={{ overflow: "auto" }} className={`${styles.check2}`}>
            {data?.allItemsById.length === 0 ? (
              <div
                style={{
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p className={`${styles.textstyle2}`}>Your cart is empty.</p>
              </div>
            ) : (
              data?.allItemsById.map((item) => (
                <div className={`${styles.itemcard}`} key={item._id}>
                  <img
                    style={{ height: "200px", width: "200px" }}
                    src={JSON.parse(item?.image)}
                    alt="item image"
                  />
                  <div style={{ display: "grid" }}>
                    <p
                      style={{
                        alignSelf: "end",
                        fontWeight: "800",
                        fontSize: "20px",
                      }}
                      className={`${styles.textstyle}`}
                    >
                      {item?.item}
                    </p>
                    <p
                      style={{
                        alignSelf: "center",
                        color: "grey",
                        cursor: "pointer",
                      }}
                      className={`${styles.textstyle}`}
                      onClick={() => removeItem(item._id)}
                    >
                      Remove
                    </p>
                  </div>
                  <div style={{ display: "grid" }}>
                    <p
                      style={{
                        alignSelf: "center",
                        justifySelf: "end",
                        position: "relative",
                        bottom: "19px",
                        right: "10px",
                      }}
                      className={`${styles.textstyle}`}
                    >
                      ${item?.price}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className={`${styles.check3}`}>
            <p
              style={{
                alignSelf: "center",
                color: "#da0404",
                fontSize: "17px",
                cursor: 'pointer'
              }}
              className={`${styles.textstyle}`}
              onClick={continueShopping}
            >
              Continue Shopping
            </p>
          </div>
        </div>
        <div className={`${styles.summary}`}>
          <div></div>
          <div className={`${styles.mainsummary}`}>
            <div
              className={`${styles.ordersum} ${styles.textstyle}`}
              style={{ position: "relative" }}
            >
              <p
                style={{
                  position: "relative",
                  top: "30%",
                  fontWeight: "500",
                  fontSize: "20px",
                }}
              >
                Order Summary
              </p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p
                style={{ fontWeight: "500", fontSize: "17px" }}
                className={`${styles.textstyle}`}
              >
                {data?.allItemsById?.length} Items
              </p>
              <p
                style={{ fontWeight: "500", fontSize: "20px" }}
                className={`${styles.textstyle}`}
              >
                ${basePrice}
              </p>
            </div>
            <div>
              <p
                style={{ fontWeight: "500", fontSize: "20px" }}
                className={`${styles.textstyle}`}
              >
                DELIVERY/PICKUP
              </p>
              <select value={method} onChange={handleChange}  disabled={cartIds.length === 0}>
                <option
                  className={`${styles.textstyle}`}
                  value="Front Door Delivery"
                >
                  Front Door Delivery
                </option>
                <option
                  className={`${styles.textstyle}`}
                  value="Hands Free Delivery"
                >
                  Hands Free Delivery
                </option>
                <option className={`${styles.textstyle}`} value="Pickup">
                  Pickup
                </option>
              </select>
              {method === "Hands Free Delivery" && (
                <p
                  style={{ fontSize: "13px", position: "relative", top: "5px" }}
                >
                  *Delivery within 100km radius of Ottawa or Hawkesbury*
                </p>
              )}
              {method === "Hands Free Delivery" && (
                <p
                  style={{ fontSize: "13px", position: "relative", top: "5px" }}
                >
                  *Hands Free Delivery is delivered inside to your place of
                  choosing*
                </p>
              )}
              {method === "Front Door Delivery" && (
                <p
                  style={{ fontSize: "13px", position: "relative", top: "5px" }}
                >
                  *Delivery within 100km radius of Ottawa or Hawkesbury*
                </p>
              )}
            </div>
            <div style={{ position: "relative" }} className={`${styles.ship}`}>
              <p
                className={`${styles.textstyle}`}
                style={{
                  position: "relative",
                  top: "50px",
                  fontWeight: "500",
                  fontSize: "17px",
                }}
              >
                Selected: {method}
              </p>
              <p
                className={`${styles.textstyle}`}
                style={{
                  position: "relative",
                  top: "50px",
                  fontWeight: "500",
                  fontSize: "17px",
                }}
              >
                {method == "Pickup" && <span>FREE</span>}
                {method == "Hands Free Delivery" && <span>$95</span>}
                {method == "Front Door Delivery" && <span>$45</span>}
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <p>Items</p>
                <p>${basePrice}</p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <p>Delivery fee</p>
                {method === "Pickup" && <p>FREE</p>}
                {method === "Hands Free Delivery" && <p>$95</p>}
                {method === "Front Door Delivery" && <p>$45</p>}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <p>HST</p>
                <p>${tax}</p>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <p
                  style={{ fontWeight: "800", fontSize: "20px" }}
                  className={`${styles.textstyle}`}
                >
                  TOTAL COST
                </p>
                <p
                  style={{ fontWeight: "800", fontSize: "20px" }}
                  className={`${styles.textstyle}`}
                >
                  ${total}
                </p>
              </div>
            </div>
            <div>
              <button
                className={`${styles.textstyle}`}
                style={{ position: "relative", top: "70px" }}
              >
                Checkout
              </button>
            </div>
          </div>
          <div></div>
        </div>
      </section>
    </>
  );
}
