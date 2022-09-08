import React, { Component,useEffect } from 'react'
import NavBar from './navBar';
import Card from "./ordercard";
import { getorders } from '../functions/Register';
import { useState } from 'react';
import "./dashboard.css"
const Orders = () => {
const [orders, setOrders] = useState(null)
    useEffect(()=> {
    getorders(setOrders)
},[])
  return (
    <body>
    <div className='container-p'>
        <NavBar></NavBar>
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