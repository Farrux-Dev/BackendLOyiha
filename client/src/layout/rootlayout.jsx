import {NavLink , Outlet} from "react-router-dom"
import '../App.css'
import React, { useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

const Rootlayout = () => {
    const [hover, setHover] = useState(false);

    const refreshPage = () => {
        window.location.reload();
      }


    
  return (
    <>
    <div>

    

<nav className="navbar">
    <div className="navbar-header">
            <button  onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)} className="btn refresh btn-primary" onClick={refreshPage}><RestartAltIcon  style={{ transform: 'rotate(-90deg)' }}/>        {hover &&   <input type="button" class="enjoy-css" value="refresh" />}
      
</button>
        <ul className="navitem">

        <a href="/" className="nav">Market</a>
           <NavLink to="/" className="nav">Home</NavLink>
           <NavLink to="contact" className="nav">Contact Us</NavLink>
          
        </ul> 
    </div>
    <div className="navbaritem">
        <input type="search" className="input"  placeholder="serach"/>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"><ShoppingCartIcon/></button>
        <NavLink to="admin"><button className="btn btn-success"><p style={{fontSize:"13px"}}>Add user</p></button></NavLink>
    </div>
</nav>


      <Outlet></Outlet>
    </div>
   

</>
  )
}

export default Rootlayout
