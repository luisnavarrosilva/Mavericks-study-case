import React, { Component } from 'react';
import NavBar from "./navBar";
import cardOrder from "./cardOrder";

export default class Orders extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <cardOrder/>
        <cardOrder/>
        <cardOrder/>
        <cardOrder/>
        <cardOrder/>
        <cardOrder/>
        <cardOrder/>
      </div>
    )
  }
}
