import React, { Component,useEffect } from 'react'
import Cards from "./cards";
import NavBar from "./navBar";
import "./../App.css";
import "../functions/Register";
import { useState } from 'react';
import { getproducts,getuser } from '../functions/Register';
import Row from 'react-bootstrap/Row';
import { useLocation } from "react-router-dom";
import "./dashboard.css"

const DashBoard = () => {
  var location = useLocation();
  var location = location.pathname.split("/");
  var location = location[2];
  console.log(location);
    const [products, setProducts] = useState(null)
    useEffect(()=> {
      getproducts(setProducts)
    },[])
  return (
    <body>
    <div className='container-p'>
      <NavBar location={location}></NavBar>
    <div className='cards-container'>
    <div className='row-wrapper'>
    <Row>
    {products!=null?(
      products.map(product => (
          <Cards product={product} key={product.id} className="card" id={product.id}/>
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