import React from 'react';
import { NavLink } from 'react-router-dom';


const Error = () => {
    return (
        <>
     <div className="setstyle2">
    <h1 className="first_home"> 404 an Error! Page Not Found!!</h1>
    <h6> Sorry, This Page Doesn't Exist!! </h6>
    <NavLink className="div_nav" to="/"> Go back</NavLink>
      </div> 
       </>
    );
};
export default Error;