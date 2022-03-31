import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import offers1 from './offers1.png';
import offers2 from './offers2.png';
import offers3 from './offers3.png';
import Images from './Images';

// const MOCKDATA = [{'pic' : offers1},{'pic' : dress3},{'pic' : dress2}];

// function ImageSlider() {
//     const createList = () =>{
//         return MOCKDATA.map((value,index) =>{
//             return <Images className = "d-block w-100" src = {value.pic} />
//         })
//     }
//     return (
//         <Carousel className="app-img">
// 			<Carousel.Item interval={120} className="imgsd"> 
// 				{createList(MOCKDATA)}
// 			</Carousel.Item>
// 		</Carousel>
           
        
//     );
// }
// export default ImageSlider;

export default function App() {
return (
	<Carousel className="app-img">
		<Carousel.Item interval={120} className="imgsd">
		<Images className = "d-block w-100" src = {offers1} alt = "dress1" />
		</Carousel.Item>

		<Carousel.Item interval={120} className="imgsd">
		<Images className = "d-block w-100" src = {offers2} alt = "offers2" />
		</Carousel.Item>

		<Carousel.Item interval={120} className="imgsd">
		<Images className = "d-block w-100" src = {offers3} alt = "offers3" />
		</Carousel.Item>

	</Carousel>
);
}
