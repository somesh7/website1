import React from 'react';
import'../node_modules/bootstrap/dist/css/bootstrap.min.css';
import web from '../src/images/wdimg1.jpg';
import Common from './Common';


const Home = () => {
   
   return (
   <>
   
    <Common  
    name='Grow your business with'  
    imgsrc={web}
    visit="/service" 
    btname="Get Started" 

    />

    </>
    );
   
  
};
export default Home;