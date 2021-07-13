import './InfoForm.css';
import React, { useState } from 'react';
function Infoform()
{
    return(
    
    <div>
        <form id="contact-form"  method="POST">
    <div className="form-group">
        <label >Name</label> 
        <input type="text" className="form-control"   value="amit" />
    </div>
    <div className="form-group">
        <label >Email address</label> <br />
        <input type="email" className="form-control" aria-describedby="emailHelp"  value=" amit@gmail.com"  />
    </div>
    <div className="form-group">
        <label htmlFor=""> mobile no.</label>
        <input type="mobilenumber" className="form-control" value=" 8877533865" />
    </div>
    <div className="form-group">
        <label>Message</label> <br />
        <textarea value=" hello contact form" className="form-control" rows="5"  ></textarea>
    </div>
    <button type="submit" className="form-group" >Submit</button>
</form>
    </div>
    )
}
export default Infoform;