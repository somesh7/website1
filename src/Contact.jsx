import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Contact = () => {
    const [data, setData] = useState({
        fullname :"",
        phone : "",
        email : "",
        msg : "",
    });

    const InputEvent = (event) => {
        const { name, value } = event.target;

        setData((preVal) => {
            return {
                ...preVal,
                [name] : value,
            };
        });
    };

    const formSubmit = (e) => {
        e.preventDefault();
        alert(` Hello ${data.fullname}. Your Mobile no is ${data.phone}. Your Email id is ${data.email}`);

    };
    return(
    <>
    <div className="my-5 pb-5">
        <h5 className="text-center"> Contact Us </h5>
    </div>

    <div className="container contact_div">
        <div className="row">
            <div className="col-md-6 col-10 mx-auto">
                <form onSubmit={formSubmit} className="d-flex flex-column align-items-center justify-content-center">
                <div class="mb-3 col-sm-7">
  <label for="exampleFormControlInput1" class="form-label">Full Name</label>
  <input type="text" 
  class="form-control" 
  id="exampleFormControlInput1"
   name="fullname" 
   value={data.fullname}
  onChange={InputEvent} 
  placeholder="Enter your Name" 
   autoComplete="off"   
  />
</div>
<div class="mb-3 col-sm-7">
  <label for="exampleFormControlInput1" class="form-label">Phone</label>
  <input type="number"
   class="form-control"
    id="exampleFormControlInput1"
    name="phone"
    value={data.phone}
  onChange={InputEvent} 
  placeholder="Mobile Number" 
  autoComplete="off" 
  />
</div>
<div class="mb-3 col-sm-7">
  <label for="exampleFormControlInput1" class="form-label">Email Address</label>
  <input type="email"
   class="form-control"
    id="exampleFormControlInput1"
    name="email"
    value={data.email}
  onChange={InputEvent} 
  placeholder="name@example.com" 
  autoComplete="off" 
  />
</div>

<div class="mb-3 col-sm-7">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea class="form-control"
   id="exampleFormControlTextarea1"
    rows="3"
     name="msg"
      value={data.msg}
  onChange={InputEvent}>

  </textarea>
</div>
 <div class="col-7 pb-5">
    <button class="btn btn-outline-primary" type="submit">Submit Form</button>
  </div>
                </form>
            </div>
        </div>
    </div>

    </>
    
);
    
};
export default Contact;