import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from "@apollo/client";
import { SUB_CATEGORY } from "../../utils/queries";
import { Link } from "react-router-dom";




const Subcategories = () => {
  let { id } = useParams();

  const { loading, error, data } = useQuery(SUB_CATEGORY, {
    variables: { categoryId: id },
  });

  console.log(data?.subcategoryById)

  return (
   <div>
    <ul>
      {data?.subcategoryById && data?.subcategoryById.map((subcategory) => (
        <li key={subcategory.name}>
          <Link to = {`/Items/${subcategory._id}`}>
          {subcategory.name}
          </Link>
          </li>
      ))}
    </ul>
   </div>
  // <></>
  );
};

export default Subcategories;