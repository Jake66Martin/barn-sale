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
        <div className={`${styles.pagecell}`} style={{display: 'flex', alignItems: 'center'}}>
            <p className={`${styles.textstyle} ${styles.itemlink}`}>{`Home >  All Furniture > ${data?.itemById.item_category} > ${data?.itemById.item}`} </p>
        </div>
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
        <div className={`${styles.namecell} ${styles.flexcell}`} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <p className={`${styles.textstyle} ${styles.itemname} ${styles.smallcenter}`} style={{position: 'relative', top: '35px', fontWeight: '800', fontSize: '25px', left: '100px'}}>{data?.itemById?.item}</p>
          <p className={`${styles.textstyle} ${styles.smallcenter}`} style={{position: 'relative', top: '35px', fontSize: '20px', left: '100px'}}>${data?.itemById?.price}</p>
        </div>
        <div className={`${styles.buttoncell} ${styles.flexcell}`}>
          <button onClick={() => addToCart(data?.itemById)} className={`${styles.textstyle} ${styles.border} ${styles.smallcenter}`} style={{color: 'white', width: '500px', position: 'relative', left:'100px'}}>Add To Cart</button>
        </div>
        <div className={`${styles.descriptioncell} ${styles.flexcell}`}>
          <p className={`${styles.textstyle} ${styles.smallcenter}`} style={{position: 'relative', left: '100px', padding: '0 15px'}}>{data?.itemById?.description}
          </p>
        </div>
      </div>
    </section>
  );
}
