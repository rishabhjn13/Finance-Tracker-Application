import React, { Component } from 'react'
import './Navbar.css'
export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggled: false
        };
    }
    handleToggle = () => {
        this.setState(prevState => ({
            isToggled: !prevState.isToggled
        }));
    };
    componentDidMount() {
        let navToggler = document.getElementById('nav-items');
        if (this.state.isToggled) {
            navToggler.style.display = "flex"
        } else {
            navToggler.style.display = "none"
        }
    }
    toggleMenuVisibilityState = () => {
        let navToggler = document.getElementById('nav-items');
        if (this.state.isToggled) {
            navToggler.style.display = "none"
            this.handleToggle();
        } else {
            navToggler.style.display = "flex";
            this.handleToggle();
        }

    }
    render() {
        return (
            <div id='main-navbar' className='flex'>
                <div className="nav-title-container h-full flex items-center">
                    <h3 id="nav-title" className='align-items-center'>{this.props.navTitle}</h3>
                </div>
                <div id='nav-item-container' className=''>
                    <div id='nav-items'>
                        <ul>
                            <li><a href="#" className='hide-item'>Menu</a></li>
                            <li><a href="#">WALLET</a></li>
                            <li><a href="#">TRANSACTIONS</a></li>
                            <li><a href="#">CHALLANS</a></li>
                            <li><a href="#">SUPPORT</a></li>
                        </ul>
                    </div>
                    <div className='nav-toggler' onClick={this.toggleMenuVisibilityState}>
                        <span className='bar'></span>
                        <span className='bar'></span>
                        <span className='bar'></span>
                    </div>
                </div>
            </div>
        )
    }
}
