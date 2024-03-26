import { useQuery } from "@apollo/client";
import { ITEMS_SUB} from '../../utils/queries'
import { useParams } from 'react-router-dom';


export default function Items() {
    let { id } = useParams();

    const { loading, error, data } = useQuery(ITEMS_SUB, {
        variables: { subcategoryId: id },
      });

      console.log(data?.itemsByCategory)

    return(
        <div>
    <ul>
      {data?.itemsByCategory && data?.itemsByCategory.map((item) => (
        <li key={item._id}>
          {item.item}
          </li>
      ))}
    </ul>
   </div>
    )
};