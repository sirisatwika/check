import React from "react";



const DemoEvent = (props) =>{
    return (
    //
    //     <button type = "submit" onClick={(e) => clickHandler(e)}>   Click Me  </button>
        <button type = "submit" onClick={(e) => props.handler(e)}>   Click Me  </button>
   
        )
}
export default DemoEvent;