import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './cart.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const baseURL='https://e-commerse-server.onrender.com/addtocart';


const Cart = () => {
  const location = useLocation();
  const cartItems = location.state?.cartitem || [];
  const userdata=location.state?.userdata || '';

  const navigate=useNavigate();

	const [cartItemsState, setCartItemsState] = useState(cartItems);

  const [subtotal, setSubtotal] = useState(0);
  const shipping = 200; // Static shipping charge for demonstration
  const [totalTax, setTotalTax] = useState(0)
  const [totalAmount, setTotalAmount] = useState(0);

  const handlecartdata=async(e)=>{
    e.preventDefault();
    try {

     const cartitem= cartItemsState.map((product)=>{return{productId:product._id,quantity:product.quantity,MRP:product.MRP,total:product.quantity*product.MRP,createAt:new Date()}})
 
     const cartobject={
        userID:userdata._id,
        userName:userdata.username,
        products:cartitem,
  
      }
      console.log(cartobject);
      const response=await axios.post(baseURL,cartobject);
      navigate('/orderhistory',{state:cartobject})
      
    } 
    catch (error) {
      console.error("Error Creating cart",error)
    }
  }
	
  useEffect(() => {
    const subTotalValue = cartItemsState.reduce(
      (total, item) => total + item.MRP * item.quantity,
      0
    );
    setSubtotal(subTotalValue);

    const totalTaxvalue=(subTotalValue*12)/100;
    setTotalTax(totalTaxvalue);
    setTotalAmount(subTotalValue + shipping + totalTaxvalue);
  }, [cartItemsState]);

  const increaseQuantity = (index) => {
    const updatedCartItems = [...cartItemsState];
    updatedCartItems[index].quantity += 1;
    setCartItemsState(updatedCartItems);
  };

  const decreaseQuantity = (index) => {
    const updatedCartItems = [...cartItemsState];
    if (updatedCartItems[index].quantity > 1) {
      updatedCartItems[index].quantity -= 1;
      setCartItemsState(updatedCartItems);
    }
  };

  const removeCartitem = async(id) => {

  let result=await fetch(`http://localhost:3700/product/${id}`,{
    method:"Delete"
  });
  const newCart = [...cartItemsState];
    newCart.splice(id, 1);
    setCartItemsState(newTasks);

}
 
  return (
    <>
    <div className="nav-container">
      <Navbar />
      </div>
      <div className="cart-container">
        
        <div className="cart-product">
        <h1 className="cart-header">Your Shopping Cart</h1>
          <table className="cart-table">
            <thead>
              <tr className="cart-row">
                <th className="cart-title">Product</th>
                <th className="cart-title">Price</th>
                <th className="cart-title">Quantity</th>
                <th className="cart-title">Total</th>
                <th className="cart-title">Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItemsState.map((product, index) => (
                <tr key={product._id} className="cart-row">
                  <td className="cart-pro-info">
                    <img src={product.productImage[0]} alt="" className="cart-pro-img" />
                    <span className="cart--pro-name">{product.productName}</span>
                  </td>
                  <td className="cart-data">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
                </svg>
                    {product.MRP}</td>
                  <td className="cart-data cart-actionBtn">
                      <button className="decreaseQnt" onClick={() => decreaseQuantity(index)}> - </button>
                    {product.quantity}
                    <button className="increaseQnt" onClick={() => increaseQuantity(index)}> + </button>
                  </td>
                  <td className="cart-data">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
                </svg>
                    {product.MRP * product.quantity}</td>
                  <td>
                    <button className="removeBtn" onClick={()=>removeCartitem(product._id)}>X</button>
                    
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="cart-summary">
          <h1 className='cart-summary-header'>Order Summary</h1>
          <div className="order-details">
            <div className="subtotal">
              <span>Subtotal</span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-currency-rupee" viewBox="0 0 16 16">
                  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
                </svg>
                {subtotal}
              </span>
            </div>
            <div className="shippingcharge">
              <span>Shipping</span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-currency-rupee" viewBox="0 0 16 16">
                  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
                </svg>
                {shipping}
              </span>
            </div>
            <div className="tax">
              <span>Total Tax</span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-currency-rupee" viewBox="0 0 16 16">
                  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
                </svg>
                {totalTax}
              </span>
            </div>
            <div className="total">
              <span>Total Amount</span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-currency-rupee" viewBox="0 0 16 16">
                  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
                </svg>
                {totalAmount}
              </span>
            </div>
            <button className='checkoutBtn' onClick={handlecartdata}>Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
