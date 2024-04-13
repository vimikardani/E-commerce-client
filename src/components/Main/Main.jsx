import {useState} from 'react'
import Navbar from '../Navbar/Navbar'
import Category from '../Category/Category'
import Gallery from '../Gallery/Gallery'
import Product from '../Products/Product'
import Footer from '../Footer/Footer';
import './main.css';
import { useLocation } from 'react-router-dom'


const Main = () => {
const [cartcounter, setCartcounter] = useState(0)
const [cartitem,setCartitem]=useState([])
const [showmodel, setshowmodel] = useState(false)

const {state}=useLocation();

console.log(state);
  return (
    <>
    
    <div className="nav-container">
        <Navbar cartcounter={cartcounter} cartitem={cartitem} userstate={state}/>
    </div>
    <div className="bg"></div>
    <div className="main-container">
    <Category/>
        <Gallery/>
        <Product cartcounter={cartcounter} setCartcounter={setCartcounter} cartitem={cartitem} setCartitem={setCartitem}/>
        <Footer/>
    </div>

    </>
  )
}

export default Main