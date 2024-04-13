import React from 'react'
import Main from './components/Main/Main'
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import Productdetails from './components/Productdetails/Productdetails';
import Cart from './components/Cart/Cart';
import Orderhistory from './components/Orderhistory/Orderhistory';


const App = () => {
  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/registration' element={<Registration/>}/>
        <Route path='/productdetails' element={<Productdetails/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/orderhistory' element={<Orderhistory/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App