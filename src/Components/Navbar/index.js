import {Component} from "react";
import {NavLink} from "react-router-dom"
import { IoIosContact } from "react-icons/io";
import { IoMdCart } from "react-icons/io";

import "./index.css"

class Navbar extends Component {
    render(){
        return(
            <div >
            <nav className="mainContainer">
                <div>
                    <h2>karo abhayaas</h2>
                </div>
                <div className="linksContainer">
                <NavLink to= "/" className= "eachLink">JOIN US</NavLink>
                <NavLink to = "/classes" className= "eachLink">Classes</NavLink>
                <NavLink to = "/products" className= "eachLink">Products</NavLink>
                <NavLink to = "./about" className= "eachLink">About</NavLink>
                <IoIosContact className="contactIcon" />
                <IoMdCart className="contactIcon" />
                </div>
            </nav>
            </div>
        )
    }
}

export default Navbar