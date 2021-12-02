import React from 'react'
import {
  Link
} from "react-router-dom";
import { encryptStorage } from '../config/Encrypt'
import { useState, useEffect } from 'react';
import Clockcomponent from './Clockcomponent';
function Navbar() {
  const [id, setid] = useState("")
  useEffect(() => {
    console.log(encryptStorage.getItem('user'))
  }, [])
  const dashboardcomponent = encryptStorage.getItem('user') != undefined ? <>
  
  <li style={{ marginLeft: "7px", marginRight: "7px", listStyleType: "none" }}>
      <Link to={`/dashboard`} style={{ color: "white", fontSize: "20px", textDecoration: "none" }}>Dashboard</Link>
    </li>
  <li style={{ marginLeft: "7px", marginRight: "7px", listStyleType: "none" }}>
    <Link to={`/posts`} style={{ color: "white", fontSize: "20px", textDecoration: "none" }}>Posts</Link>
  </li>
    
    <li style={{ marginLeft: "7px", marginRight: "7px", listStyleType: "none" }}>
      <Link to="/logout" style={{ color: "white", fontSize: "20px", textDecoration: "none" }}>Logout</Link>
    </li>   <li style={{ marginLeft: "7px", marginRight: "7px", listStyleType: "none" }}>
      <Link to="/addpost" style={{ color: "white", fontSize: "20px", textDecoration: "none" }}>Addpost</Link>
    </li>   </> : <></>
  return (
    <nav style={{ borderBottom: "2px solid black", backgroundColor: "blue" }} >
      <ul style={{ paddingTop: "7px", display: "flex",paddingRight:"20px" }}>
        <li style={{ marginLeft: "7px", marginRight: "7px", listStyleType: "none" }}>
          <Link to="/" style={{ color: "white", fontSize: "20px", textDecoration: "none" }}>Home</Link>
        </li>
        {dashboardcomponent}
        <li style={{ marginLeft: "7px", marginRight: "7px", listStyleType: "none" }}>
          <Link to="/login" style={{ color: "white", fontSize: "20px", textDecoration: "none" }}>Login</Link>
        </li>
        <li style={{ marginLeft: "7px", marginRight: "7px", listStyleType: "none" }}>
          <Link to="/register" style={{ color: "white", fontSize: "20px", textDecoration: "none" }}>Register</Link>
        </li>
        <li style={{ marginLeft: "7px", marginRight: "7px", listStyleType: "none" }}>
          <Link to="/about" style={{ color: "white", fontSize: "20px", textDecoration: "none" }}>About</Link>
        </li>
        <li style={{ marginLeft: "7px", marginRight: "7px", listStyleType: "none" }}>
          <Link to="/users" style={{ color: "white", fontSize: "20px", textDecoration: "none" }}>Users</Link>
        </li>
        
      <div style={{marginLeft:'auto',color:"white"}}>
        <Clockcomponent />
      </div>
      </ul>
    </nav>
  )
}

export default Navbar
