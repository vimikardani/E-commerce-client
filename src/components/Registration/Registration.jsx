import {useState} from 'react';
import './registration.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import FlipkartImage from '../../assets/images/flipkart signup photo.png'; 

const baseURL= 'https://e-commerse-server.onrender.com/user/registration';

const Registration = () => {
  const [userdata, setUserdata] = useState({
    name:"",
    email:"",
    username:"",
    password:"",
  });

  const handleChange=(e)=>{
    setUserdata({...userdata,[e.target.name]:e.target.value});
  };

  const navigate=useNavigate();

  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
      const response=await axios.post(baseURL,userdata);
      console.log("Post created",response.data);
      navigate('/login')
      
    } catch (error) {
      console.error("Error Creating post",error)
    }
  }

  
  return (
    <>
    <div className="regi-container">
      <div className="regi-left">
        <img src={FlipkartImage} alt="image" />
      </div>
      <div className="regi-right">
        <div className="regi-header">Registration</div>
        <hr className='regi-hr'></hr>
        <form className='regi-form' onSubmit={handleSubmit}>
          
          <div className="form-container">
            <label htmlFor="name">Name</label><br></br>
            <input className='regi-input' type="text" placeholder='Enter your Name' name='name' value={userdata.name} onChange={handleChange}/><br></br>
            <label htmlFor="email">Email</label><br></br>
            <input className='regi-input' type="text" placeholder='Enter your Email' name='email' value={userdata.email}  onChange={handleChange}/><br></br>
            <label htmlFor="uname">Username</label><br></br>
            <input className='regi-input' type="text" placeholder='Enter your Username' name='username' value={userdata.username} onChange={handleChange}/><br></br>
            <label htmlFor="pwd">Password</label><br></br>
            <input className='regi-input' type="password" placeholder='Enter password' name='password' value={userdata.password} onChange={handleChange}/><br></br>
            <label htmlFor="rpwd">Confirm Password</label><br></br>
            <input className='regi-input' type="password" placeholder='Enter password again' name='repassword'/><br></br>

            <button type='submit' className='regi-btn'>Register
            </button><br></br>
            <button className='login-link'>
              <Link to='/login'className='login-link'>Existing User?Log in</Link></button>

          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default Registration