import { useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import { ITEMS_SUB, ITEMS } from "../../utils/queries";
import { useParams, Link } from "react-router-dom";
import "./items.css";

export default function Items() {
  let { id } = useParams();
  const [limit, setLimit] = useState(8);
  const [offset, setOffset] = useState(0);
  const [page, setPage] = useState(1);
  const [properData, setProperData] = useState('')

  const {
    loading: paginationLoad,
    error: paginationError,
    data: paginationItems,
  } = useQuery(ITEMS_SUB, {
    variables: { subcategoryId: id, limit, offset },
  });

  const {
    loading: itemsLoad,
    error: itemsError,
    data: allItems,
  } = useQuery(ITEMS, {
    variables: { subcategoryId: id },
  });

  
  let yes = paginationItems?.itemsByCategory || []

  console.log(yes)

 const itemData = [];



// Iterate over query results
yes?.forEach(item => {
  // Clone the object to avoid modifying the original
  const newItem = { ...item };
  


  console.log('Image value before parsing:', item.image);

  
//   try {
//     // Remove double quotes from the image strings and then parse as JSON
//     newItem.image = item.image.map(url => JSON.parse(url.replace(/^"(.*)"$/, '$1')));

//     itemData.push(newItem);
//   } catch (error) {
//     console.error('Error handling item:', error);
//     // Optionally handle the error or skip the item
//   }
// });

try {
  // Parse the 'image' property of each item as JSON
  newItem.image = item.image.map(url => url.slice(1, -1));

  itemData.push(newItem);
} catch (error) {
  console.error('Error handling item:', error);
  // Optionally handle the error or skip the item
}
});

// Now itemData contains the modified data with JavaScript arrays for the image property
console.log(itemData);




//   // Function to convert JSON arrays to JavaScript arrays within each element
// function convertImageArrays(itemData) {
//   // Iterate over each element of the array
//   for (let i = 0; i < itemData?.length; i++) {
//       // Parse the JSON string to convert it into a JavaScript array
//       let imagesArray = JSON.parse(itemData[i].image);
//       // Replace the JSON string with the JavaScript array within the element
//       itemData[i].image = imagesArray;
//   }
//   return itemData;
// }

// // Call the function to convert the JSON arrays to JavaScript arrays
// let convertedArray = convertImageArrays(itemData);

// // Now the original array contains JavaScript arrays for images
// console.log(convertedArray);
  
  
  
 

  const numberOfPages = allItems?.allItemsByCategory.length / 8;
  const pagesRequired = Math.ceil(numberOfPages);

  // console.log(paginationItems?.itemsByCategory);

  function clickPlus() {
    if (page < pagesRequired) {
      setOffset(offset + limit);
      setPage(page + 1);
    } else {
      console.log("No data available.");
    }
  }

  function clickNegative() {
    if (page > 1) {
      setPage(page - 1);
      setOffset(offset - limit);
    } else {
      console.log("Page number cannot go below 1.");
    }
  }

  return (
    <div className="height overflow-cnt">
      <div>
        <div className="d-flex flex-wrap justify-content-center align-items-center">
          {paginationItems?.itemsByCategory &&
            paginationItems?.itemsByCategory.map((item) => (
              <div
                key={item._id}
                className="card d-flex"
                style={{ width: "18rem", margin: "20px" }}
              >
                <img
                  src={item.image[0]}
                  className="card-img-top img-height"
                  alt="item"
                />
                <div className="card-body align-self-center">
                  <h5 className="card-title">{item.item}</h5>
                </div>
                <div className="card-body align-self-center">
                  <Link to={`/ViewItem/${item._id}`} className="card-link">
                    View item
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="d-flex justify-content-center my-3">
        <button
          className="btn btn-outline-danger"
          onClick={() => clickNegative()}
        >
          Previous
        </button>
        <div
          style={{ width: "30px" }}
          className="d-flex justify-content-center"
        >
          <p>{page}</p>
        </div>
        <button className="btn btn-outline-danger" onClick={() => clickPlus()}>
          Next
        </button>
      </div>
    </div>
  );
}
