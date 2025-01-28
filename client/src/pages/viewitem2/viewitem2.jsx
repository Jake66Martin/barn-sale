import styles from "./viewitem2.module.css";
import { useQuery, useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";
import { ITEM_ID } from "../../utils/queries";
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import Swal from "sweetalert2";
import { ME } from '../../utils/queries';
import Auth from '../../utils/auth';
import { REMOVE_ITEM } from "../../utils/mutations";


export default function Viewitem2() {
const [mainImage, setMainImage] = useState(null);
const [altImages, setAltImages] = useState([]);

const isAuthenticated = Auth.loggedIn();

  const [removeItem] = useMutation(REMOVE_ITEM)


  const {loading: meLoad, error: meError, data: meData} = isAuthenticated ? useQuery(ME) : { loading: false, error: null, data: null };
  
  

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

  // useEffect(() => {
  //   if (data?.itemById?.image) {
  //     setMainImage(data.itemById.image[0]);
  //     setAltImages([
  //       data.itemById.image[1],
  //       data.itemById.image[2],
  //       data.itemById.image[3],
  //     ]);
  //   }
  // }, [data]);

  
  useEffect(() => {
    if (data?.itemById?.image) {
      // Set the main image
      setMainImage(data.itemById.image[0]);
  
      // Fill the altImages array to always have 3 slots, filling empty slots with placeholders
      const filledAltImages = Array(3)
        .fill("No Image Available") // Replace this with a placeholder image URL if needed
        .map((placeholder, index) => data.itemById.image[index + 1] || placeholder);
  
      setAltImages(filledAltImages);
    }
  }, [data]);
  

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

    
      console.log("Item added successfully to cart:", data);
      Swal.fire({
        position: "center-center",
        icon: "success",
        title: "Item has been successfully added to the shopping cart.",
        showConfirmButton: false,
        timer: 2000,
      });
    
  }

  return (
    <section className={`${styles.maingrid}`}>
      <div className={`${styles.cell1}`}>
        <div className={`${styles.pagecell}`} style={{display: 'flex', alignItems: 'center'}}>
            <p className={`${styles.textstyle} ${styles.itemlink}`}><Link to='/' style={{textDecoration: 'none', color: 'black'}}>Home</Link> {'>'} <Link to='/Browse' style={{textDecoration: 'none', color: 'black'}}>All Furniture</Link> {'>'} <Link to={`/Subcategories/${data?.itemById.item_category}`} style={{textDecoration: 'none', color: 'black'}}>{data?.itemById.item_category}</Link> {'>'} {data?.itemById.item} </p>
            {meData?.me && meData?.me.email === "jake66martin@hotmail.com" && (
      <button className="btn btn-danger btn-lg align-self-center m-3" 
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

                                                            localStorage.setItem("itemAdded", "true");


                                                            window.history.back();
                                                            

                                                    }}>
                                        Delete Item
                                    </button>)
           }
        </div>
        <div className={`${styles.imgcell}`}>
        <img src={mainImage} className={`${styles.mainimage}`} alt="Main Image" />
        </div>
        {/* <div className={`${styles.altimgcell}`}>
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
          
           
        </div> */}
        <div className={`${styles.altimgcell}`}>
  {altImages.map((image, index) => (
    <div
      key={index}
      style={{
        display: "flex",
        justifyContent:
          index === 0 ? "flex-start" : index === 1 ? "center" : "flex-end",
      }}
      onClick={() => image !== "No Image Available" && handleImageClick(image, index)} // Only allow clicking valid images
    >
      {image === "No Image Available" ? (
        <div
          className={`${styles.placeholder}`}
          style={{
            width: "90%", // Adjust size
            height: "90%",
            border: "1px dashed gray",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "gray",
            fontSize: "12px",
            textAlign: 'center'
          }}
        >
          No Image Available
        </div>
      ) : (
        <img
          src={image}
          className={styles.imgsize}
          alt={`Alternate Image ${index + 1}`}
        />
      )}
    </div>
  ))}
</div>
      </div>
      <div className={`${styles.cell2}`}>
        <div className={`${styles.namecell} ${styles.flexcell}`} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <p className={`${styles.textstyle} ${styles.itemname} ${styles.smallcenter} ${styles.smallercenter}`} style={{position: 'relative', top: '35px', fontWeight: '800', fontSize: '25px', left: '100px'}}>{data?.itemById?.item}</p>
          <p className={`${styles.textstyle} ${styles.smallcenter} ${styles.smallercenter}`} style={{position: 'relative', top: '35px', fontSize: '20px', left: '100px'}}>${data?.itemById?.price}</p>
        </div>
        <div className={`${styles.buttoncell} ${styles.flexcell}`}>
          <button onClick={() => addToCart(data?.itemById)} className={`${styles.textstyle} ${styles.border} ${styles.smallcenter}`} style={{color: 'white', width: '500px', position: 'relative', left:'100px'}}>Add To Cart</button>
        </div>
        <div className={`${styles.descriptioncell} ${styles.flexcell}`}>
          <p className={`${styles.textstyle} ${styles.smallcenter} ${styles.desc}`} style={{position: 'relative', left: '100px', padding: '0 15px'}}>{data?.itemById?.description}
          
          </p>
        </div>
      </div>
    </section>
  );
}
