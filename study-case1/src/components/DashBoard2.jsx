import React, { Component,useEffect } from 'react'
import Cards from "./cards";
import NavBar from "./navBar";
import "./../App.css";
import "../functions/Register";
import { useState } from 'react';
import { getproducts } from '../functions/Register';
import Row from 'react-bootstrap/Row';
import "./dashboard.css"

const DashBoard = () => {
    const [products, setProducts] = useState(null)
    useEffect(()=> {
      getproducts(setProducts)
    },[])
  return (
    <body>
    <div className='container-p'>
      <NavBar></NavBar>
    <div className='cards-container'>
    <div className='row-wrapper'>
    <Row>
    {products!=null?(
      products.map(product => (
          <Cards product={product} key={product.id} className="card"/>
      ))
    ):("not products ")}
    </Row>
    </div> 
    </div> 
    </div> 
    </body>
  )
}

export default DashBoard