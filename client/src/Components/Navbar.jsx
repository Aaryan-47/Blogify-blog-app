import React from 'react';
import '../styles/navbar.css'
import {Link} from 'react-router-dom';
import {Context} from "../context/Context.js";
const PF = "http://localhost:5000/pictures/"
function show1()
{
 const links=document.querySelector('.links')
 links.classList.toggle('show-links')
 console.log("ff")
}
function show2()
{
    const links=document.querySelector('.links2')
    links.classList.toggle('show-list2')
}
function Navbar()
{
  const {logged,user,setlogged,setuser}=React.useContext(Context);
  const handleLogout = () => {
    setlogged(false);
    setuser('');
  };
    return (
        <>
         
      <nav className="navbar sticky-top navbar-light">
        <div className="nav-center">
        <div className="nav-header">
          <div className="cont1">
        <button className="nav-toggle2"onClick={show2}>
                <i className="fas fa-bars"></i>
            </button>
            <ul className="links2">
              <li>
                <p>CATEGORIES</p>
              </li>
            <li>
                <a href="home.html">Life</a>
            </li>
            <li>
                <a href="home.html">Music</a>
            </li>
            <li>
                <a href="home.html">User</a>
            </li>
            <li>
                <a href="home.html">Sports</a>
            </li>
  
        </ul>
            </div>
            <button className="nav-toggle" onClick={show1}>
                <i className="fas fa-bars"></i>
            </button>
        </div>
        
        <ul className="links">
            <li>
                <Link to="/">HOME</Link>
            </li>
            <li>
                <a href="home.html">ABOUT</a>
            </li>
            <li>
                <a href="home.html">CONTACT</a>
            </li>
            <li>
                <Link to="/write">CREATE</Link>
            </li>
          
           
            <li>
                <Link to="/login">{!logged&&"LOGIN"}</Link>
            </li>
            <li>
                <Link to="/register">{!logged&&"SIGNUP"}</Link>
            </li>
    
        </ul>
        <ul className="social-icons">
        <li>
              <Link to="/settings">{logged&&<img  className="navImage"src={PF+user.profile}></img>}</Link>
            </li>
            <li>
                <button onClick={handleLogout}>{logged&&"LOGOUT"}</button>
            </li>
        </ul>
        </div>


        </nav>
        </>
    )
}
export default Navbar