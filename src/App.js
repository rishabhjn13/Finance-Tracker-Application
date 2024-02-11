import React, { Component } from 'react'
import Navbar from './Components/NavigationBar/Navbar'
import './App.css'
export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar navTitle={"Money Plus"} />
      </div>
    )
  }
}
