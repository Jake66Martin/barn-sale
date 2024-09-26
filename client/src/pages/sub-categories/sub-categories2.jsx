import styles from './sub-categories2.module.css'
import { useParams } from 'react-router-dom';
import { useQuery } from "@apollo/client";
import { SUB_CATEGORY2 } from "../../utils/queries";
import { Link } from "react-router-dom";

export default function Subcategories2 () {
    let { name } = useParams();

  const { loading, error, data } = useQuery(SUB_CATEGORY2, {
    variables: { name: name },
  });

  console.log(data)


  return (
   <div className='sub-height background'>
    <ul className='height d-flex flex-column align-items-center justify-content-center no-deco'>
      {data?.subcategoryByName && data?.subcategoryByName.map((subcategory) => (
        <li key={subcategory.name} className='my-2 border-list'>
          <Link to = {`/Items/${subcategory.name}`} className='no-deco'>
          {subcategory.name}
          </Link>
          </li>
      ))}
    </ul>
   </div>
  );
}