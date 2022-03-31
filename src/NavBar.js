import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Link,
    Routes
  } from "react-router-dom";
  
const NavBar = () =>{
  const activeStyle = {
      'color' : 'red',
      'fontSize' : '30px'
  }
    return (
    <nav>
          {/* <NavLink to="/">Home</NavLink>
          <NavLink to="/aboutus">AboutUs</NavLink>
          <NavLink to="/contactus">ContactUs</NavLink>
          <NavLink to="/categories">Categories</NavLink>
          <NavLink to = "/productdescription">ProductDesciption</NavLink> */}
          <NavLink style= {({isActive}) => isActive ? activeStyle : undefined} to="/">Home</NavLink>
          <NavLink style= {({isActive}) => isActive ? activeStyle : undefined} to="/aboutus">AboutUs</NavLink>
          <NavLink style= {({isActive}) => isActive ? activeStyle : undefined} to="/contactus">ContactUs</NavLink>
          <NavLink style= {({isActive}) => isActive ? activeStyle : undefined} to="/categories">Categories</NavLink>
          <NavLink style= {({isActive}) => isActive ? activeStyle : undefined} to = "/productdescription">ProductDesciption</NavLink>
          <NavLink style= {({isActive}) => isActive ? activeStyle : undefined} to = "/viewcart">viewcart</NavLink>
        </nav>
    )
}

export default NavBar;