import React from "react";
import Button1 from "./Button1";

const clickHandler = (e) => {
    
    e.target.innerHTML = "Done";
    console.log('Helloooooo1111111')
  }

const Component1 = () => {
    return (
        <Button1 c1 = {clickHandler}/> 
    )
}

export default Component1;