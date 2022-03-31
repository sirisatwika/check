import React,{useState} from 'react';
import Heading from './Heading';
import store from './Store/store';
import addtocart from './Actions/addcart';

const Counter = (props) => {
    const [count, setCounter] = useState(0);
    return(
        <>
        
        <button onClick = {() => setCounter(count - 1)}>-</button>
        <h1>{count}</h1>
        <button onClick = {() => setCounter(count + 1)}>+</button><br />
        <button onClick = {() => store.dispatch(addtocart({pname:props.bname,count:count}))}>Add to cart</button>
        </>
    )
}
export default Counter;
// class Counter extends React.Component{
//     constructor(){
//         super();
//         this.state = {
//             value : 0
//         }
//     }
//     increment = () =>{
//         this.setState({
//            value : this.state.value +1
//        })
//     }
//     decrement = () =>{
//         this.setState({
//             value : this.state.value - 1
//         })
//      }
//      componentDidMount(){
//          console.log('mounting')
//      }
//      componentDidUpdate(){
//          console.log('update')
//      }
//      componentWillUnmount(){
//          console.log('unmount')
//      }
//     render(){
//         return (
//             <>
//              <button onClick = {this.decrement}> - </button>
//             <span>{this.state.value}</span>
//             <button onClick = {this.increment}> + </button>
//             <Heading item = {this.state.value} />
//             </>
//         )
//     }
// }

// export default Counter;