import {useState} from 'react';
import './login.css'
import FlipkartImage from '../../assets/images/Flipkart_login_page.jpg' // Import the image
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const baseURL='https://e-commerse-server.onrender.com/user/login';
const Login = () => {
  const [logindata, setlogindata] = useState({
    username:"",
    password:"",
  })
  
  const [userdata, setUserdata] = useState({})
  
  const navigate=useNavigate();
  const handleloginChange=(e)=>{
    setlogindata({...logindata,[e.target.name]:e.target.value});
  };
  
  const handleloginSubmit=async(e)=>{
    e.preventDefault();
    try {
      
      const {data}=await axios.post(baseURL,logindata);
      setUserdata(data)
      
      navigate('/',{state:data})
      
    } catch (error) {
      console.error("Error Creating post",error)
    }
  }
  
  return (
    <>
    <div className="login-container">
      <div className="login-left">
        <img src={FlipkartImage} alt="image" />
      </div>
      <div className="login-right">
        <div className="login-header">Login or Sign up</div>
        <hr></hr>
        <form className='login-form' onSubmit={handleloginSubmit}>
          <div className="login-title">Welcome to Flipkart</div>
          <div className="form-container">
            <label htmlFor="uname"><b>Email Id</b></label><br></br>
            <input className='input' type="text" placeholder='Enter username' name='email' value={logindata.email} onChange={handleloginChange}/><br></br>
            <label htmlFor="pwd"><b>Password</b></label><br></br>
            <input className='input' type="password" placeholder='Enter password' name='password' value={logindata.password} onChange={handleloginChange}/><br></br>

            <button type='submit' className='signin-btn'>Signin
              {/* <Link to='/' className='signin-btn'>Sign In</Link>  */}
              </button><br></br>
            <button className='signup-btn'>
              <Link to='/registration' className='signup-btn'>New to Flipkart?Create an account</Link></button>

          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default Login