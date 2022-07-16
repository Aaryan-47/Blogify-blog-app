import {useState,useEffect,useContext} from 'react';
import axios from 'axios';
import '../styles/login.css'
import {Link} from 'react-router-dom';
import {Context} from "../context/Context.js";
function Signup()
{
  const {user,setuser,logged,setlogged}=useContext(Context)
  const [username,setusername]=useState('')
  const [password,setpassword]=useState('');
  const [email,setemail]=useState('');
  const handle=async (e)=>{
   e.preventDefault();
   try{
    const res=await axios.post('/authenciate/register',{
      username,
      password,
      email
    })
    console.log(user);
    res.data&&window.location.replace('/login');
   }
   catch{

   }
  }
  return(
    <div className="container-fluid">
    <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
    </div>
    <form class="form" onSubmit={handle}>
        <h3>Register</h3>

        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username" onChange={(e)=>setusername(e.target.value)}/>
        <label htmlFor="username">E-mail</label>
        <input type="text" placeholder="Email or Phone" id="username" onChange={(e)=>setemail(e.target.value)}/>
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" onChange={(e)=>setpassword(e.target.value)}/>
        <label htmlFor="fileInput">
                <i className="writeIcon fas fa-plus"></i>Upload Pic(optional)
              </label>
        <input id="fileInput" type="file" style={{ display: "none" }} />
        <button class="button1">SignUp</button>
        <p>Already a User?<Link to="/login">Login</Link></p>
    </form>
    </div>
  )
}

export default Signup;