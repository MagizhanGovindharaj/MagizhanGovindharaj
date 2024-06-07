import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/ProductDetails.css"

function Table(){
    let [content,setcontent]=useState()
    let navigatetoproductDetails=useNavigate()
    let getdata=async()=>{
        try{
            let {data}=await axios.get("https://fakestoreapi.com/products")
            console.log(data);
            setcontent(data)
        }
        catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        getdata()
    },[])
    let goto=((id)=>{
        navigatetoproductDetails(`/Table/${id}`)
    })
    return(
        <div style={{height:"auto",width:"1300px", margin:"100px", backgroundColor:"white"}}>
           <table border={3} style={{border:"2px solid black", fontFamily:"Courier New", fontSize:"20px"}} cellSpacing={"0px"} cellPadding={"10px"} >
                <thead style={{color:"white", backgroundColor:"pink"}}>
                <tr>
                    <th>SI NO</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Product Details</th>
                </tr>
                </thead>
                {content?.map(({id,title,description,image,price})=>{
                return(
                    <tbody align="center">
                        <tr>
                            <td>{id}</td>
                            <td>{title}</td>
                            <td>{description}</td>
                            <td><img src={image} alt="" style={{height:"auto", width:"200px"}} /></td>
                            <td>{price}</td>
                            <td><button onClick={()=>{goto(id)}} style={{margin:"50px", height:"40px", width:"120px", backgroundColor:"#00ec00",border:"none",borderRadius:"20px"}}>View</button></td>
                        </tr>
                    </tbody>
                )
            })}
            </table>
        </div>
    )
}

export default Table;