import React, {Component} from "react";
import {NavbarItems} from "./NavbarItems";
import { Button } from "../Button";
import './Navbar.css';
import {BiGame} from 'react-icons/bi'

class Navbar extends Component{
    state = {
        clicked: false
    }

    handleclick = () => {
        this.setState({ clicked: !this.state.clicked})
    }

    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Tuan<i className="icon"><BiGame/></i></h1>
                <div className="menu-icon" onClick={this.handleclick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active':'nav-menu'}>
                    {NavbarItems.map((item, index)=>{
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url} >
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <Button >Sign up</Button>
            </nav>
        )
    }

}

export default Navbar