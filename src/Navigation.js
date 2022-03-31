import React from "react";
import Home from "./Home";
import AboutUs from "./AboutUs";
import NavBar from "./NavBar";
import ContactUs from "./ContactUs";
import Categories from "./Categories";
import Size from "./Size";
import Color from "./Color";
import ViewCart from "./ViewCart";

import {

    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes
  } from "react-router-dom";


const isLogged = true;
const Navigation = () => {
    return (
        <>
       
    <Router>
        <NavBar />
        <div className="App">          
          <Routes>
           <Route path="/" element={<Home/>}/>
            <Route path = "aboutus" element  = {<AboutUs />}/>
            <Route path = "categories"  element= {<Categories />}>

            <Route path = "contactus"  element= {<ContactUs />}/>
              <Route path = "size" element = {<Size />}/>
              <Route path = "color" element = {<Color />}/>  
            </Route>

            <Route path = "viewcart"  element= {<ViewCart />}></Route>
          </Routes>
        </div>
      </Router>
     
      </>
    )
}

export default Navigation;