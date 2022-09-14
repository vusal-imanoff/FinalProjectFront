import React,{useEffect,useState} from 'react'
import './Order.css'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'

function Order({myToken}) {
    const [orders,setOrders] = useState([])
    const [cars,setCars] = useState([])
    const navigate = useNavigate();
    console.log(myToken);
    useEffect(()=>
    {
      axios.get('http://vusalimanoff-001-site1.htempurl.com/api/orders/getall', {
        headers: {
          'Authorization': `token ${myToken}`
        }
      })
        .then(resp=> setOrders(resp.data))

        axios.get('http://vusalimanoff-001-site1.htempurl.com/api/cars/getcars')
        .then(resp=> setCars(resp.data))
    },[])
    console.log(cars);
  return (
    <div>
        <div className='texts'>
            <h2 className='title'>Orders</h2>
            <table className='table'>
  <thead>
    <tr>
      <th scope="col">№</th>
      <th scope="col">Name</th>
      <th scope="col">Status</th>
      <th scope="col">Date</th>
    </tr>
  </thead>
  <tbody>
    {
      
      orders&&orders.map(o=>
         (

        
        <tr>
      <th scope="row">{o.id}</th>
      <td>{cars && cars.find(c => c.id == o.carId).plate}</td>
      <td>{o.orderStatus}</td>
      <td>${o.price}</td>
    </tr>
        )
      )
    }
    
  </tbody>
</table>
          </div>
    </div>
  )
}

export default Order