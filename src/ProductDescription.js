import React from "react";
import { useParams } from "react-router-dom";

const ProdutDescription =() =>{
    let params = useParams();
    console.log(params.productid)
    return <h1>ProdutDescription</h1>

}
export default ProdutDescription;