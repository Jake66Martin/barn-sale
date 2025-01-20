import styles from "./viewitem2.module.css";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { ITEM_ID } from "../../utils/queries";
import { useState } from "react";

export default function Viewitem2() {


    const [mainImage, setMainImage] = useState('/garage.jpg');
    const [altImages, setAltImages] = useState([
      '/living-room.jpg',
      '/kitchen.jpg',
      '/office.jpg',
    ]);
  
  

    const handleImageClick = (clickedImage, index) => {
        // Replace the main image with the clicked image
        const newMainImage = clickedImage;
    
        // Replace the clicked image in the altImages array with the current main image
        const updatedAltImages = [...altImages];
        updatedAltImages[index] = mainImage;
    
        // Update states
        setMainImage(newMainImage);
        setAltImages(updatedAltImages);
      };




  let { id } = useParams();

  const { loading, error, data } = useQuery(ITEM_ID, {
    variables: { id: id },
  });

  console.log(data?.itemById);

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
        <img src={mainImage} className={`${styles.mainimage}`} alt="Main Image" />
        </div>
        <div className={`${styles.altimgcell}`}>
        {altImages.map((image, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent:
                index === 0 ? "flex-start" : index === 1 ? "center" : "flex-end",
            }}
            onClick={() => handleImageClick(image, index)} // Pass index and image
          >
            <img
              src={image}
              className={styles.imgsize}
              alt={`Alternate Image ${index + 1}`}
            />
          </div>
        ))}
          
           
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
  );
}
