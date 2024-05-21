import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from "@apollo/client";
import { SUB_CATEGORY } from "../../utils/queries";
import { Link } from "react-router-dom";
import './sub-categories.css'




const Subcategories = () => {
  let { id } = useParams();

  const { loading, error, data } = useQuery(SUB_CATEGORY, {
    variables: { categoryId: id },
  });

  console.log(data?.subcategoryById)

  return (
   <div className='sub-height background'>
    <ul className='height d-flex flex-column align-items-center justify-content-center no-deco'>
      {data?.subcategoryById && data?.subcategoryById.map((subcategory) => (
        <li key={subcategory._id} className='my-2 border-list'>
          <Link to = {`/Items/${subcategory._id}`} className='no-deco'>
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