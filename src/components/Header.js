import React, { Component } from 'react'
import logo from '../meetup.png'

class Header extends Component {
  render() {
    return (
      <div className="headerWrapper">
        <span className="top">
        <img src={logo} height={180} width={256}/>
        <h1>Belgrade</h1>
        </span>


       
      </div>
    )
  }
}

export default Header;