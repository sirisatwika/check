import React from "react";
import Button2 from "./Button2";

const clickHandler = (e) => {
    
    e.target.innerHTML = "Done";
    console.log('Helloooooo222222222')
  }

const Component2 = () => {
    return (
        <Button2 c2 = {clickHandler}/> 
    )
}

export default Component2;