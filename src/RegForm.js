import React, { useRef } from "react";
import './RegForm.css';

function RegForm() {
    let InputRef = useRef("")
    let InputRef1 = useRef("")
    let InputRef2 = useRef("")
    let InputRef3 = useRef("")
    let InputRef4 = useRef("")
    let InputRef5 = useRef("")


    function SumitData(e) {
        let Name = InputRef.current.value;
        let Email = InputRef1.current.value;
        let MobileNo = InputRef2.current.value;
        let Gender = InputRef3.current.value;
        let DateTime= InputRef4.current.value;
        let Comments = InputRef5.current.value;
        e.preventDefault()

        console.warn({ Name,Email,MobileNo,Gender,DateTime,Comments});
        let data={Name,Email,MobileNo,Gender,DateTime,Comments}
        fetch( "api url" ,
        {
            method:'POST',
            headers:{
                'Accept':'application/Json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        
        }).then((result)=>{
            console.warn("result",result);
        })


    }



    return (
        <>
            <div className="container">
                <form >
                    <div>
                        <label > Name</label><br />
                        <input ref={InputRef} type="text"
                        />
                    </div>
                    <div>
                        <label > Email</label><br />
                        <input ref={InputRef1} type="Email"
                        />
                    </div>
                    <div>
                        <label> mobile no</label><br />
                        <input ref={InputRef2} type="mobile number"
                        />
                    </div>
                    <div>
                        <label> Gender</label><br />
                        <select ref={InputRef3} name="Gender" id="cars">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>

                        </select>
                    </div>
                    <div>
                        <label> Date</label><br />
                        <input  ref={InputRef4} type="Date" name="trip-start" value="2018-07-22"  min="2018-01-01" max="2018-12-31"
                        />
                    </div>
                    <div>
                    <label >Comments </label>
                    <br />
                    <textarea ref={InputRef5} name="Comment" rows="10" cols="100">
                    At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.
                    </textarea>
                    </div>


                    <span><button type="button" onClick={SumitData}>Summit</button></span>
                </form>
            </div>

        </>

    )

}
export default RegForm;