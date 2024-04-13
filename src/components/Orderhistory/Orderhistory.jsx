import React from 'react'
import './orderhistory.css'
import Navbar from '../Navbar/Navbar'
import { useLocation } from 'react-router-dom'

const Orderhistory = () => {
  const location=useLocation();
  const cartobject=location.state
  console.log(cartobject);
  const cartUserId=cartobject.userID;

  const cartUsername=cartobject.userName;
  
  const products=cartobject.products;
  
  console.log(products);
  
  return (
    <>
    <div className="nav-container">
     <Navbar/>
      </div>
    <div className="order-container">
    <div className="orderhistorymodel">
      <div className="order-header">
        <span className='order-title'>Order History</span>
       
        </div>
        <div className="orderdata">
        <table className="cart-table">
            <thead>
              <tr className="cart-row">
                <th className="cart-title">ProductID</th>
                <th className="cart-title">Placed</th>
                <th className="cart-title">PlacedBy</th>
                <th className="cart-title">Status</th>
                <th className="cart-title">Quantity</th>
                <th className="cart-title">MRP</th>
                <th className="cart-title">Total</th>
              </tr>
              {products.map((productdata)=>(
                  <tr className="cart-row">
                  <td>{productdata.productId}</td>
                  <td>{productdata.createAt.toString()}</td>
                  <td>{cartUsername}</td>
                  <td>Complete</td>
                  <td>{productdata.quantity}</td>
                  <td>{productdata.MRP}</td>
                  <td>{productdata.total}</td>
                </tr>
              ))}
              
              
    
            </thead>
            </table>
        </div>
    </div>
    </div>
    </>
  )
}

export default Orderhistory