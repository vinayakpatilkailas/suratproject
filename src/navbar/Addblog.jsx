import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../navbar/Homecomponent/css/Register.css"

const Addblog = () => {
  const [name, setname] = useState("");
  const [mobileno, setmobileno] = useState("");
  const [email, setemail] = useState("");
  const [state, setstate] = useState("");
  const [city, setcity] = useState("");
  const [Address, setAddress] = useState("");
  const [Gender,setGender] = useState('')
  const [image, setimage] = useState("");

  const navigate = useNavigate();

  const handeladdproduct = async () => {
    navigate("/list");
    console.log(name, mobileno, email, state, city, Address ,Gender, image);
    const userid = JSON.parse(localStorage.getItem("user"))._id;
    console.log(userid);
    let result = await fetch("https://calm-red-zebra-gear.cyclic.app/addproduct", {
      method: "post",
      body: JSON.stringify({ name, mobileno, email, state, city, Address ,Gender, image}),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
  };
  return (
    <div>
      <div className="registration">
        <div className="from-box-1"></div>
        <div className="login-box-2">
          <h1 className="register1">REGISTRATION</h1>
          <form onSubmit={handeladdproduct}>

            <label for="name" className="label1">Name : </label>
            <br/>
            <input type="text" name="name" value={name} onChange={(e)=>{setname(e.target.value)}} required />
            <br/>
            <label for="mobile" className="label2">Mobile No. : </label>
            <br/>
            <input type="number" name="mobile" value={mobileno} onChange={(e)=>{setmobileno(e.target.value)}} required/>
            <br/>
            <label for="email" className="label3">Email : </label>
            <br/>
            <input type="text" name="email"  value={email} onChange={(e)=>{setemail(e.target.value)}} required />
            <br/>
            <label for="state" className="label4">State : </label>
            <br/>
            <input type="text" name="state"  value={state} onChange={(e)=>{setstate(e.target.value)}} required />
            <br/>
            <label for="city" className="label5">City : </label>
            <br/>
            <input type="text" name="city"  value={city} onChange={(e)=>{setcity(e.target.value)}} required/>
            <br/>
            <label for="des" className="label6">Address : </label>
            <br/>
            <input type="text" name="des"  value={Address} onChange={(e)=>{setAddress(e.target.value)}} />
            <br/>



            <label for='gen' className="gender"> Gender : </label>
            <br/>
            <label for="male" className="gender1">Male:<input className="radio" type="radio" name="vinayak"  id="male" value={Gender} onChange={(e)=>{setGender(e.target.value)}} required/> </label><br/>
            
            <label for="Female" className="gender2">Female:<input className="radio2" type="radio" name="vinayak" id='Female' value={Gender} onChange={(e)=>{setGender(e.target.value)}} required/></label>
            <br/>
          





            <label for="image" className="label7">Image : </label>
            <br/>
            <input type="file" name="image"  value={image} onChange={(e)=>{setimage(e.target.value)}} required />
            <br/>
           

            <button className="btn1" type="submit">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Addblog;
