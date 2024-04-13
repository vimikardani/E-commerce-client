import React from 'react';
import './navbar.css';
import { Link,useNavigate } from 'react-router-dom';



const Navbar = ({cartcounter,cartitem,userstate}) => {

    const navigate = useNavigate();

    function handleClick() {
      navigate('/orderhistory')
    }
  
    // New function for handling logout
    function handleLogout() {
      // Clear user state or perform any other logout actions
      // For example, clearUserState();
  
      // Redirect the user to the login page
      navigate('/login');
    }

  return (
    <>
    <nav>
    <div className="nav-container">
        <div className="logo">
            <img className='img-logo' src='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg' alt='logo'></img>
        </div>
        <div className="search-box">
          <svg width="24" height="24" className="search-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Search Icon</title><path d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z" stroke="#717478" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 16L21 21" stroke="#717478" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          <input type="text" className="search" placeholder='Search for Products, Brands and More' />
        </div>
        <div className="user-login">
            {/* Check if the user is logged in to display Logout or Login link */}
            {userstate ? (
              <Link className="login" onClick={handleLogout} title='Logout'>
                <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg" alt="Logout" width="24" height="24"></img>
                <span className='login-text'>Logout</span>
              </Link>
            ) : (
              <Link className="login" to='/login' title='Login'>
                <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg" alt="Login" width="24" height="24"></img>
                <span className='login-text'>Login</span>
              </Link>
            )}
          </div>
          {/* ... Cart and Order History code ... */}
          <div className="cart">
        <Link className="cart" to='/cart' state={{cartitem:cartitem,userdata:userstate}}>
          <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg" alt="Cart" width="24" height="24"></img>
          <span className='cart-text'>Cart</span>
          </Link>
          <div className="cart-counter">{cartcounter}</div>
        </div>
        <div className="order-history">
        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg" alt="Become a Seller" width="24" height="24"></img>
        
        <button className='order-his-btn' onClick={handleClick}>Order History</button>
        </div>

        </div>
    </nav>
    </>
  )
}

export default Navbar