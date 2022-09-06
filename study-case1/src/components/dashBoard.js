import React, { Component,useEffect } from 'react'
import Cards from "./cards";
import NavBar from "./navBar";
import "./../App.css";
import "../functions/Register";
import { useState } from 'react';
import { getproducts } from '../functions/Register';
export default class dashBoard extends Component {


  render() {
    return (
        <div>
          <h1>{}</h1>
        <NavBar></NavBar>
        <>
        </>
        <div className="cards-container">
        <div class="row">
          <div class="col-sm-4">
            <Cards></Cards>
        </div>
          <div class="col-sm-4">
            <Cards></Cards>
          </div>
          <div class="col-sm-4">
            <Cards></Cards>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4">
            <Cards></Cards>
        </div>
          <div class="col-sm-4">
            <Cards></Cards>
          </div>
          <div class="col-sm-4">
            <Cards></Cards>
          </div>
          </div>
          <div class="row">
          <div class="col-sm-4">
            <Cards></Cards>
        </div>
          <div class="col-sm-4">
            <Cards></Cards>
          </div>
          <div class="col-sm-4">
            <Cards></Cards>
          </div>
        </div>
        </div>
        </div>
       
    )
  }
}
