
import './App.css';
import Header from './Header';
import Body from './Body';
import Heading from './Heading';
import Lists from './Lists';
import Button from './Button';
import UserList from './UserList';
import DemoEvent from './DemoEvent';
import Task from './Task';
import Task2 from './Task2';
import { click } from '@testing-library/user-event/dist/click';
import  Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3'
import Counter from './Counter';
import Details from './Details';
import Form from './form';
import Hooksdemo from './Hooksdemo';
import Home from './Home';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import NavBar from './NavBar';
import Categories from './Categories';
import Size from './Size';
import Color from './Color';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import ProdutDescription from './ProductDescription';
import ListDemo from './ListDemo';
import Data from './Data';
import Navigation from './Navigation';
import CounterWithRedux from './CounterWithRedux';
import HelloWorld from './HelloWorld';
const isLogged = true;

const clickHandler = (e) => {
    
  e.target.innerHTML = "Done";
  console.log('Helloooooo')
}

const ClickEvent = () =>{
  const txt = document.getElementById("val").value;
  console.log(txt);

}

const ChangeEvent = (e) =>{
  console.log(e.target.value);
}
const getHeading = (data) => {
  console.log(data);
}

function App() {
  return (
  <>
  <div className="App">
    <Header />
    {isLogged ? <><Heading heading="Welcome Satwika"/><button >signout</button></> : <button>signin</button>}
     
  <Navigation />
  {/* <Data />
    <
    <ListDemo /> */}
  {/* <CounterWithRedux /> */}
  {/* <HelloWorld message = 'hey' /> */}
  {/* <NavBar /> */}
  {/* <Home /> */}
  {/* <Body /> */}
  {/* <NavBar /> */}
      {/* <Router>
        <NavBar />
        <div className="App">          
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path = "aboutus" element  = {<AboutUs />}/>
            <Route path = "contactus"  element= {<ContactUs />}/>
            <Route path = "categories"  element= {<Categories />}>
              <Route path = "size" element = {<Size />}/>
              <Route path = "color" element = {<Color />}/>  
            </Route>
            <Route path = "productdescription/:productid" element = {<ProdutDescription />}/>
          </Routes>
        </div>
      </Router>
      <Data /> */}
  
      {/* <Hooksdemo />
      <Counter /> 
      <Details /> 
      <Form /> */}
      {/* <Heading />  
       <Header getHeading = {getHeading}/>
       */}
     {/* <Counter />
    <Component1 />
      <Component2 />
      <Component3 />
      <UserList />
      <Lists /> */}
      
      {/* <Navigation />   */}
      
      {/* <DemoEvent handler = {clickHandler}/><br /><br />
      <Task task1 = {ClickEvent}/><br /><br />
      <Task2 changeEve = {ChangeEvent}/><br /><br /> */}   
      {/* {isLogged && <Heading heading = "react" />}
      {8 > 9 ? <Heading heading = "react" /> : <Heading heading = "npm" />} */}
      {/* {isLogged ? <button>Signin</button>  : <button>Signin</button> }
      */}
    </div>
  </>
   
  );
}

export default App;
