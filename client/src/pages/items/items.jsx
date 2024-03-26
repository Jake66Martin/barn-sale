import { useQuery } from "@apollo/client";
import { ITEMS_SUB} from '../../utils/queries'
import { useParams } from 'react-router-dom';
import './items.css'


export default function Items() {
    let { id } = useParams();

    const { loading, error, data } = useQuery(ITEMS_SUB, {
        variables: { subcategoryId: id },
      });

      console.log(data?.itemsByCategory)

    return(
        <div className='item-height'>
    
      {data?.itemsByCategory && data?.itemsByCategory.map((item) => (
        <div key={item._id} className="card" style={{width: '18rem', margin: '20px'}}>
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{item.item}</h5>
          <p className="card-text">{item.description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{item.price}</li>
        </ul>
        <div className="card-body">
          <a href="#" className="card-link">Card link</a>
          <a href="#" className="card-link">Another link</a>
        </div>
      </div>
      ))}
    
    </div>
   
    )
};