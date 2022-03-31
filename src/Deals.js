import React from 'react';
import dress1 from './dress1.png';
import dress2 from './dress2.png';
import dress3 from './dress3.png';
import Images from './Images';
import Heading from './Heading';
import Counter from './Counter';
const styleimages = {
    width: "15vw" , 
    height : "15vw"
}
const textstyle = {
    fontSize : "15px",
    color : "white"
}
const MOCKDATA = [{'pic' : dress1,'price' : 'MRP : 500','picname' : 'dress1'},
 {'pic' : dress3,'price' : 'MRP : 500','picname' : 'dress2'},
 {'pic' : dress1,'price' : 'MRP : 500','picname' : 'dress3'},
 {'pic' : dress3,'price' : 'MRP : 500','picname' : 'dress4'},
 {'pic' : dress1,'price' : 'MRP : 500','picname' : 'dress5'},
 {'pic' : dress3,'price' : 'MRP : 500','picname' : 'dress6'},
];

const Deals = () =>{
    const createList = () =>{
        return MOCKDATA.map((value,index) =>{
            return <li key = {index}>
                    <div>
                        <img src={value.pic} /><br />
                        <Heading heading = {value.price} style = {textstyle} /> 
                        <Heading heading = {value.picname} />
                        <Counter bname= {value.picname}/><br />
                       
                    </div>
                
                {/* <h2>{value.name}</h2><h3>{value.id}</h3><h4>{value.dept}</h4><img src={value.dp}/> */}
                 
                </li>
        })
    }
    return (
        <nav class = "deals-nav" >
            <ul>
                {createList(MOCKDATA)}
            </ul>
        </nav>
    )
}
export default Deals;


// const Deals = () => {
//     return (
        
//         <nav class = "deals-nav" >
//             <ul>
//                 <li>
//                     <div>
//                         <Images src = {dress1} alt = {dress1} style = {styleimages} />
//                         <br />
//                         <Heading heading = "MRP : 250 " style = {textstyle} /> 
//                     </div>  
//                 </li>

//                 <li>
//                     <div>
//                     <Images src = {dress2} alt = {dress2} style = {styleimages} />
//                         <br />
//                         <Heading heading = "MRP : 250 " style = {textstyle} /> 
//                     </div>  
//                 </li>
                
//                 <li>
//                     <div> 
//                     <Images src = {dress3} alt = {dress3} style = {styleimages} />
//                      <br />
//                      <Heading heading = "MRP : 250 " style = {textstyle} /> 
//                     </div>    
//                 </li>

//                 <li>
//                     <div>
//                         <Images src = {dress1} alt = {dress1} style = {styleimages} />
//                         <br />
//                         <Heading heading = "MRP : 250 " style = {textstyle} />  
//                     </div>  
//                 </li>

//                 <li>
//                     <div>
//                     <Images src = {dress2} alt = {dress2} style = {styleimages} />
//                         <br />
//                         <Heading heading = "MRP : 250 " style = {textstyle} /> 
//                     </div>  
//                 </li>
                
//                 <li>
//                     <div> 
//                     <Images src = {dress3} alt = {dress3} style = {styleimages} />
//                      <br />
//                      <Heading heading = "MRP : 250 " style = {textstyle} /> 
//                     </div>    
//                 </li>
                
            
//             </ul>
//         </nav>
//     )
// // }

// export default Deals;