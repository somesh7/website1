
import React from 'react';
import'../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Common from './Common';
import web from '../src/images/img3.png';


const About = () => {
   
   return (
    <>
    <Common  
    name='Welcome to About Page'
    imgsrc={web}
    visit="/contact"
    btname="Contact Now"

    />
    
     </>
   );
   
  
};
export default About;