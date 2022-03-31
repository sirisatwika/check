import React from "react";
import pic2 from './pic2.png';
import pic3 from './pic3.png';

const MOCKDATA = [{'name' : 'Siri','id' : 1, 'dept' : 'accounts','dp' : pic3} ,
{'name' : 'Ruchika','id' : 2, 'dept' : 'admin','dp' : pic2},
{'name' : 'Sahithi','id' : 3, 'dept' : 'finanace','dp' : pic3}] ;

const UserList = () =>{
    const createList = () =>{
        return MOCKDATA.map((value,index) =>{
            return <li key = {index}><h2>{value.name}</h2><h3>{value.id}</h3><h4>{value.dept}</h4><img src={value.dp}/></li>
        })
    }
    return (
        <ul>
            {createList(MOCKDATA)}
        </ul>
    )
}
export default UserList;