import React ,{useState}from 'react';
import PropTypes from 'prop-types';
// function Heading  (props)  {
//     return (
//         <h1>{props.heading}</h1>
//     )
// }
// const Heading = () => {
//     const [count, setCounter] = useState(0);
//     return(
//         <>
//         <h1>{count}</h1>
//         <button onClick = {() => setCounter(count - 1)}>-</button>
//         <button onClick = {() => setCounter(count + 1)}>+</button>
        
//         </>
//     )
// }
const Heading = ({heading,value,style,item}) =>{
    
    //const [label,useLabel] = useState('This is label');

    
    return (
         <h4 style = {style} > {heading} {value} {item}</h4>
    )
}

// Heading.defaultProps = {
//     heading : "I am a default heading"
// }

Heading.propTypes = {
    heading : PropTypes.string.isRequired
}
export default Heading;