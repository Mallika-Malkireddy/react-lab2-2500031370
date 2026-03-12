import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react'

export default function Demo4() {
    const[data,setData]=useState([])
    const[error,setError]=useState("")
    //Async is used to  return the promise object
    //await is used to wait the promise object
    const displayData = async()=>{
        try
         {
           const response= await axios.get("https://fakestoreapi.com/products")
           setData(response.data)
        } 
        catch (error) 
        {
            setError(error.message)
        }
    }
    useEffect(() => {
        displayData()
    }, []);
  return (
    <div>
             <h1><u>Axios Demo </u></h1>
        {
            error ? <b>{error}</b> : 
            data.length==0 ? 
            <b>Loading...</b>:
            <table border={1}>
                <tr>
                  <th>ID</th>
                    <th>Title</th>
                      <th>Price</th>
                      <th>Description</th>
                        <th>Category</th>
                          <th>Image</th>
                            <th>Rate</th>
                            <th>Count</th>
                </tr>
                {
                    data.map((products,index) =>(
                <tr key={index}>
                    <td>{products.id}</td>
                     <td>{products.title}</td>
                      <td>{products.price}</td>
                      <td>{products.description}</td>
                      <td>
                        <img src= {products.image} width="30%" height="30%"/>
                        </td>
                      <td>{products.category}</td>
                      <td>{products.rating.rate}</td>
                      <td>{products.rating.count}</td>
                     
                      
                </tr>
            ))
                }
            </table>
        }
    </div>
  )
}
