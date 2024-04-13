import {useState,useEffect} from 'react'
import Navbar from '../Navbar/Navbar';
import './productdetails.css';
import { useLocation } from 'react-router-dom';

const Addtocart = () => {

  const location = useLocation();
  const { product } = location.state

  return (

    <>
    <Navbar />
    
    <div className="productDetails">
      <div className="proImage-container">
      {product.productImage && product.productImage.length > 0 && (
            <div className="pro-images">
              <div className="col-images">
              
                <img src={product.productImage[0]} alt="mobileimage" className="col-img" />
             
                <img src={product.productImage[1]} alt="mobileimage" className="col-img" />
                <img src={product.productImage[2]} alt="mobileimage" className="col-img" />
                <img src={product.productImage[3]} alt="mobileimage" className="col-img" />
                <img src={product.productImage[4]} alt="mobileimage" className="col-img" />
                <img src={product.productImage[5]} alt="mobileimage" className="col-img" />
                <img src={product.productImage[6]} alt="mobileimage" className="col-img" />
                <img src={product.productImage[0]} alt="mobileimage" className="col-img" />
                
              </div>
              <div className="row-images">
                <img src={product.productImage[0]} alt="" className="row-img" />
                <svg className='likeicon' xmlns="http://www.w3.org/2000/svg" class="_1l0elc" width="16" height="16" viewBox="0 0 20 16"><path d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z" fill="gray" class="eX72wL" stroke="#FFF" fill-rule="evenodd" opacity=".9"></path></svg>
              </div>
         
            </div>
            )}
            {/* <div className="actionButton">
              <button className="addtocartBtn">
                <svg class="_1KOMV2" width="16" height="16" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path class="" d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86" fill="#fff"></path></svg>
                <span>Add to Cart</span>
              </button>
              <button className="buynowBtn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="#fff" class="bi bi-suitcase-fill" viewBox="0 0 16 16">
                  <path d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V3h1.5A1.5 1.5 0 0 1 13 4.5v9a1.5 1.5 0 0 1-1.004 1.416A1 1 0 1 1 10 15H6a1 1 0 1 1-1.997-.084A1.5 1.5 0 0 1 3 13.5v-9A1.5 1.5 0 0 1 4.5 3H6zM9 1H7v2h2zM6 5.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0z" />
                </svg>
                <span>Buy Now</span>
              </button>
            </div> */}
          
      </div>

      <div className="proDetails-contailner">
        <div>
          <span className='pro-name'>{product.productName}</span><br></br>
          </div>
          <div className='pro-info-details'>
          <span className="pro-info">{product.productinfo}</span>
          </div>
          <div className='pro-info-details'>
            <span className='pro-text'>Special Price</span></div>
            <div className='pro-price-details'>
            <svg className='cur-icon' xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
                </svg>
                <span className='pro-price'>{product.MRP}</span></div>
            <div className="color-details">
            <span className='color-text'>Color</span>  
            <div className="black"></div>  
            <div className="blue"></div> 
            <div className="green"></div> 
            <div className="wine"></div>        

            </div>
            <div className="size-details">
            <span className='size-text'>Size</span>  
            <div className="small">S</div>  
            <div className="medium">M</div> 
            <div className="large">L</div> 
            <div className="xl">XL</div>        

            </div>
            <div className="product-specification">
              <span className='product-spe-title'>Product Specification</span>
        <div className="specification">
              <div className="type">
                <span className='pro-spe-text'>Type </span>
                <span className='pro-spe-value'>Shirt/T-shirt</span>
              </div>
              <div className="fabric">
                <span className='pro-spe-text'>Fabric</span>
                <span className='pro-spe-value'>Cotton Blend</span>
              </div>
              <div className="packof">
                <span className='pro-spe-text'>Pack of</span>
                <span className='pro-spe-value'>1</span>
              </div>
              <div className="idealfor">
                <span className='pro-spe-text'>Ideal For</span>
                <span className='pro-spe-value'>Men</span>
              </div>
              </div>
            </div>
      </div>
      </div>
    </>
  )
}

export default Addtocart