import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export class NavBar extends Component {

    render(){

        return (
            <div className="navbar">


            <nav>

            <img src="./Images/Inmlogo.jpg" width="125" alt="Designed logo"/>

                <ul>
                    <Link to="/home"> <li><a href="Home">Home</a></li></Link>
                    <Link to="/products"> <li><a href="Products">Products</a></li></Link>
                    <Link to="/contact"><li><a href="Contact">Contact</a></li></Link>
                </ul>



               
            </nav>
        </div>

        )
    }
}
export default NavBar;