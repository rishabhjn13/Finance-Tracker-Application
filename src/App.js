import React, { Component } from 'react'
import Navbar from './Components/NavigationBar/Navbar'
import './App.css'
import Dash from './Components/Dashboard/Dash'
export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar navTitle={"Finance Tracker"} />
        <Dash/>
      </div>
    )
  }
}
