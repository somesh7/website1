import React from 'react';
import { NavLink } from 'react-router-dom';
import'../node_modules/bootstrap/dist/css/bootstrap.min.css';



const Common = (props) => {
   
   return (
   <>
   
    <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                <div className="row">  
                    <div className="col-md-6 pt-lg-0 order-2 order-lg-1  d-flex flex-column justify-content-center">
                        <h3 className="design"> {props.name} <strong className="brand-name"> WP Works </strong></h3>
                        <h4 className="my-3"> we are the team of talented  Developers making websites </h4>
                        <div className="mt-3">
                            <NavLink to={props.visit} className="btn-get-started align-items-center justify-content-center"> {props.btname} </NavLink>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 header-img">
                    <img src={props.imgsrc} className="img-fluid animated" alt="home img" />

                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    </>);
   
  
};
export default Common;