import React from 'react';
import Images from './Images';
import mobile from './mobile.png';
import eleacc from './eleacc.png';
import tv from './tv.png';
import beauty from './beauty.png';
import homeess from './homeess.png';
import travel from './travel.png';
import furniture from './furniture.png';
import fashion from './fashion.png';
import Heading from './Heading';
// import from './.png';

const imgstyle={
    width: "5vw" , 
    height : "5vw"
}

const textstyle = {
    fontSize : "15px",
    color : "white"
}

const MOCKDATA = [{'link': 'https://www.w3schools.com/', 'pic': fashion,'name' : 'Fashion'},
{'link': 'https://www.w3schools.com/','pic': mobile,'name' : 'Mobile'},
{'link': 'https://www.w3schools.com/','pic': eleacc,'name' : 'Electric Appliances'},
{'link': 'https://www.w3schools.com/','pic': tv,'name' : 'TV'},
{'link': 'https://www.w3schools.com/','pic': beauty,'name' : 'Beauty'},
{'link': 'https://www.w3schools.com/','pic': homeess,'name' : 'Home Essentials'},
{'link': 'https://www.w3schools.com/','pic': travel,'name' : 'Travel'},
{'link': 'https://www.w3schools.com/','pic': furniture,'name' : 'Furniture'}

];

const LinkB = () =>{
    const createList = () =>{
        return MOCKDATA.map((value,index) =>{
            // return <li key = {index}><h2>{value.name}</h2><h3>{value.id}</h3><h4>{value.dept}</h4><img src={value.dp}/></li>
            return  <li key = {index}>
                        <a class = "app-name" href = {value.link}>
                           
                                <Images src={value.pic} style = {imgstyle}/><br/>
                                <Heading heading = {value.name} style = {textstyle}/>
                            
                        </a>
                    </li>
        })
    }
    return (
        <nav class = "App-nav">
        <ul >
            {createList(MOCKDATA)}
        </ul>
        </nav>
    )
}
export default LinkB;

// const LinkB = () =>{

//     return(
//         <nav class = "App-nav">
//             <ul>

//                 <li>
//                 <a class = "app-name" href = "https://www.w3schools.com/">
//                     <div>
//                         <Images src={mobile} alt="mobile" style={imgstyle}/>
//                         <br />
//                         <Heading heading = "Mobiles" style = {textstyle} />
                         
//                     </div>    
//                     </a>
//                 </li>

//                 <li>
//                 <a class = "app-name" href = "https://www.w3schools.com/">
//                     <div>
//                     <Images src={eleacc} alt="eleacc" style={imgstyle}/>
//                     <br />
//                     <Heading heading = "Electronics" style = {textstyle} />
//                     </div>    
//                     </a>
//                 </li>
                
//                 <li>
//                 <a class = "app-name" href = "https://www.w3schools.com/">
//                     <div>
//                     <Images src={beauty} alt="beauty" style={imgstyle}/>
//                         <br />
//                         <Heading heading = "Beauty" style = {textstyle} />
                        
//                     </div>    
//                     </a>
//                 </li>

//                 <li>
//                 <a class = "app-name" href = "https://www.w3schools.com/">
//                     <div>
//                     <Images src={tv} alt="tv" style={imgstyle}/>
//                     <br />
//                     <Heading heading = "TV" style = {textstyle} />
//                     </div>    
//                     </a>
//                 </li>

//                 <li>
//                 <a class = "app-name" href = "https://www.w3schools.com/">
//                     <div>
//                     <Images src={fashion} alt="fashion" style={imgstyle}/>
//                     <br />
//                     <Heading heading = "Fashion" style = {textstyle} />
//                     </div>    
//                     </a>
//                 </li>

//                 <li>
//                 <a class = "app-name" href = "https://www.w3schools.com/">
//                     <div>
//                     <Images src={homeess} alt="homeess" style={imgstyle}/>
//                     <br />
//                     <Heading heading = "Home Essentials" style = {textstyle} />
//                     </div>    
//                     </a>
//                 </li>

//                 <li>
//                 <a class = "app-name" href = "https://www.w3schools.com/">
//                     <div>
//                     <Images src={travel} alt="travel" style={imgstyle}/>
//                     <br />
//                     <Heading heading = "Travel" style = {textstyle} />
//                     </div>    
//                     </a>
//                 </li>

//                 <li>
//                 <a class = "app-name" href = "https://www.w3schools.com/">
//                     <div>
//                     <Images src={furniture} alt="furniture" style={imgstyle}/>
//                     <br />
//                     <Heading heading = " Furniture" style = {textstyle} />
                   
//                     </div>    
//                     </a>
//                 </li>
            
//             </ul>
//         </nav>
            
            
//     )
// }

// export default LinkB;