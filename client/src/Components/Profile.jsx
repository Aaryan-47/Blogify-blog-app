import react from 'react';
import Navbar from './Navbar';
import '../styles/profile.css';
import axios from 'axios';
import React from 'react';
import {useLocation} from 'react-router';
import AllPost from './AllPost';

export default function Profile()
{
    const folder="http://localhost:5000/pictures/"
    const id=useLocation()
    const loc=id.pathname.split("/")[2];
    console.log(loc);
    const [blogs,setblogs]=react.useState([])
    const [userdetails,setuserdetails]=react.useState([])
    const[i,seti]=react.useState(false)
    react.useEffect(()=>{
     fetchDetails()
    },[])
    const fetchDetails=async ()=>{
        await axios.get(`/authenciate/?name=${loc}`)
     .then((res)=>{
      setuserdetails(res.data)
      seti(true)
     })
     await axios.get(`/blogs/?user=${loc}`)
     .then((res)=>{
        setblogs(res.data)
        seti(true)
     })
    }
    console.log(userdetails)
    console.log(blogs)
    return(
        <>
        <Navbar/>
        <h2>User Profile Card</h2>
  <div class="card">
    <div class="container">
      <img src={i&&folder+userdetails[0].profile} style={{width:"40%" }} alt="" />
      <h2 style={{textAlign:"center"}}>{i&&userdetails[0].username}</h2>
      <p class="title">{i&&userdetails[0].email}</p>
      <p>India University</p>
      <div style={{margin:"24px 0"}}>
        <a href="#"><i class="fa fa-instagram"></i></a>
        <a href="#"><i class="fa fa-facebook"></i></a>
        <a href="#"><i class="fa fa-twitter"></i></a>
        <a href="#"><i class="fa fa-linkedin"></i></a>

      </div>
      <p><button>Contact</button></p>
    </div>
  </div>
  <h2>{i&&userdetails[0].username}'s Blogs</h2>
    <AllPost blog={blogs}/>
        </>
    )
}