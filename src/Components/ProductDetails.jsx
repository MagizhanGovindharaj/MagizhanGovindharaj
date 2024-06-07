import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'

function ProductDetails() {
    let [content,setcontent]=useState()
    let navigatetoproducts=useNavigate()
    let {pid}=useParams()
    let getdata=async()=>{
        try{
            let {data}=await axios.get(`https://fakestoreapi.com/products/${pid}`)
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

    console.log(content);
  return (
    <div id="details">
        <img id='img' src={content?.image} alt="Image Not Found" title='Image'/>
        <aside id='content'>
            <h1>Category: <span>{content?.category}</span></h1>
            <h1>Title: <span>{content?.title}</span></h1>
            <h1>Description: <span>{content?.description}</span></h1>
            <h1>Price: <span>${content?.price}</span></h1>
            <h1>Ratings: <span>{content?.rating.rate}</span></h1>
            <span style={{display:"flex", gap:"20px"}}><button style={{height:"40px",width:"150px",borderRadius:"10px",border:"none",backgroundColor:"#fc940d", color:"white", fontSize:"20px", fontWeight:"bolder"}}>Add To Cart</button><button style={{height:"40px",width:"150px",borderRadius:"10px",border:"none",backgroundColor:"#fc940d", color:"white", fontSize:"20px", fontWeight:"bolder"}}>Buy Now</button></span>
            <button id='back' onClick={()=>{navigatetoproducts('/Table')}}>Back to Products</button>
        </aside>
    </div>

  )
}

export default ProductDetails