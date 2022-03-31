import React from 'react';
import Button from './Button';
import Logo from './Logo';
import Search from './Search';

import Heading from './Heading';

const HeadingValue = "welcome to the page";

const Header = (props) =>{
    return (  
      
      <header className="App-header">
        <div>
          {/* <button onClick={ ()=> props.getHeading(HeadingValue)} >click Me</button>
        <Heading heading = {HeadingValue}/> */}
        </div>
        <div>
        <Logo/>
        <Search />
        <Button name="Search"/>
        <Button name = "Profile" />
       </div>
      </header>
      
   
    )
}
export default Header;