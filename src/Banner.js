import React from 'react';
import ban from './ban.png';
import Heading from './Heading';
import Images from './Images';

const banimg = {
    width : "100%" ,
    height : "30vw"
}
 const bantext = {
     fontSize : "14px",
     color : "red"
 }

const headingValue = "Banner";
const Banner = () => {
    return (
        // <div class = "App-Banner">
            <div>
            <Heading heading = {headingValue} style = {bantext} />
            <Images src = {ban} alt = {ban} style = {banimg}/>
            {/* <img src={ban} className="App-Banner-pic" alt="ban" />     */}
        </div>
    )
}
export default Banner;