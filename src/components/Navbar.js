import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return(
        <nav>
            <ul>
                <div className="nav-home">
                    <NavLink to='/'><li>Home</li></NavLink>
                    
                </div>
                <div className="nav-cart">
                    <NavLink to='/cart'><li>Cart</li></NavLink>
                    <li className="cart-price">Total price: 0€</li>
                </div>
            </ul>
        </nav>
    )
}

export default Navbar;