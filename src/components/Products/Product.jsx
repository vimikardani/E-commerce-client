import { useState, useEffect } from 'react';
import './product.css';
import axios from 'axios';
import { Link } from 'react-router-dom';


const baseURL = 'https://e-commerse-server.onrender.com/products';

const truncateDescription = (description, maxLength = 30) => {
  if (description.length <= maxLength) {
    return description;
  }

  const truncatedDescription = description.substring(0, maxLength).trim();
  return truncatedDescription + '...';
};

const Product = ({cartcounter,setCartcounter,cartitem,setCartitem}) => {
  const [data, setdata] = useState([]);
  

  useEffect(() => {
    async function getProductdata(){
      const response=await axios.get(baseURL)
      setdata(response.data)

    }
    getProductdata()
  
  }, [])

  return (
    <>
      <div className="pro-container">

        {data?.map((product) => (

          <div className="product-card">
            <div className="pro-image">
              <Link to="/productdetails" state={{product:product}}>
              <img className='pro-img' src={product.productImage[0]} alt="" /></Link>
              <svg xmlns="http://www.w3.org/2000/svg" className="_1l0elc" width="16" height="16" viewBox="0 0 20 16">
                <path d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z" fill="gray" className="eX72wL" stroke="#FFF" fillRule="evenodd" opacity=".9"></path>
              </svg>
            </div>
            <div className="pro-name">
              <span className="pro-name-text">{product.productName} </span>
            </div>
            <div className="pro-info">
              <span className='pro-info-text'>{truncateDescription(product.productinfo)}</span>
            </div>
            <div className="pro-price">
              <span className='pro-price-text'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
                </svg>
                {product.MRP}</span>
            </div>
            <div className="actionBtn">
              <button className='addtocart-button' onClick={()=>{
                setCartcounter(prev=>prev+1);
                setCartitem(prev=>[...prev,product])}} value={product}>Add to Cart</button>
              <button className='buynow-button'>Buy Now</button>
            </div>
            
          </div>
          
        ))}
  
      </div>
    </>
  )
}

export default Product