import React, { Component,useEffect } from 'react'
import NavBar from './navBar';
import Card from "./ordercard";
import { getorders } from '../functions/Register';
import { useState } from 'react';
import "./dashboard.css"
import { useLocation } from "react-router-dom";
const Orders = () => {
  var location = useLocation();
  var location = location.pathname.split("/");
  var location = location[2];
const [orders, setOrders] = useState(null)
    useEffect(()=> {
    getorders(setOrders)
},[])
  return (
    <body>
    <div className='container-p'>
      <NavBar location={location}></NavBar>
        {orders!=null?(
      orders.map(order => (
        <div>
            <Card key={order.id} order={order} className="card"/>
        </div >
      ))
    ):("not orders ")}
    </div>
    </body>
  )
}

export default Orders