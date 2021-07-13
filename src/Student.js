import React from "react";
function Student() {
    // let [ Name,setName]=useState("amit") 
    // let [Email,setEmail]=useState("a@gmail.com")
    // let inputRef=useRef("")

     const SummitForm =()=>{
         var Name=document.getElementById('link').value;
         alert(Name)
    //    / console.warn("name",input)
    }

  return (
    <div>
    
    <div className="form-group">
        <label >Name</label> 
        <input type='text'  name='link' id='link' placeholder='Your link' /> 
    
    </div>
    <div className="form-group">
        <label >Email address</label> <br />
        <input type='text'  name='link' id='link1' placeholder='Your link' />
    
    </div>
    <div className="form-group">
        <label htmlFor=""> mobile no.</label>
        <input type='text'  name='link' id='link2' placeholder='Your link' />
    </div>
    <div className="form-group">
        <label>Message</label> <br />
        <textarea value=" hello contact form" className="form-control" rows="5"  ></textarea>
    </div>
    <button  className="form-group"   onClick= {SummitForm} >Submit</button>

    </div>

  )
}

export default Student;