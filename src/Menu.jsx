import React from "react";
import { NavLink } from "react-router-dom";
import'../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Menu = () => {

    return(
        <>
        <div className="container">
        <div className="menu_style">
       
        <NavLink  exact activeClassName="active_class" to="/"> Home
       </NavLink>
       <NavLink exact activeClassName="active_class" to="/service"> Services
       </NavLink>
       <NavLink exact activeClassName="active_class" to="/search"> Search 
       </NavLink>
       <NavLink exact activeClassName="active_class" to="/about"> About
       </NavLink>
       <NavLink exact activeClassName="active_class" to="/contact"> Contact
       </NavLink>

       </div>
       </div> 
       
        </>
    ); 
};

export default Menu;