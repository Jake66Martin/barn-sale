import './viewitem.css'
import {useQuery} from '@apollo/client'
import {ITEM_ID} from '../../utils/queries'
import {useParams} from 'react-router-dom'

export default function ViewItem() {
    let {id} = useParams();


    const {loading, error, data} = useQuery(ITEM_ID, {
        variables: { id: id }
    })


    
    return (
    <div className='t-height'>
    <img src={data?.itemById.image}/>
    <p>{data?.itemById.item}</p>
    <p>{data?.itemById.description}</p>
    <p>{data?.itemById.price}</p>
    </div>
    )
}