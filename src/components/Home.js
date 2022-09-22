import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Sign_img from './Sign_img';
import{ NavLink } from 'react-router-dom';

function Home() {
    const [inpVal, setInputVal]=useState({
        name:"",
        email:"",
        date:"",
        password:""
    })
const [data,setdata]=useState([]);
    // console.log(inpVal)

    const getData=(e)=>{
        // console.log(e.target.value)
        const {value,name}=e.target;
        setInputVal(()=>{
            return{
                ...inpVal,
                [name]:value
            }
        })

    }
    const addData =(e)=>{
      e.preventDefault();
    //   console.log(inpVal);
    const {name,email,date,password}=inpVal;
    if(name===""){
        alert("name is requred");
    }
    else if(email===""){
        alert( "email is require")
    }
    else if(!email.includes("@")){
        alert( "enter valid emaol")

    }
    else if(date===""){
        alert( "date is require")

    }
    else if(password===""){
        alert( "password is require")

    }
    else if(password<5){
        alert( "password must have atleast 6 charector")

    }
    else{

        // console.log("success")
        localStorage.setItem("userdata", JSON.stringify([...data,inpVal]));

    }

    }
    return (
        <>
            <div className="canteneer mt-3" >
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-6" style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6'>Sign Up</h3>
                        <Form>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Control type="text" name='name' onChange={getData}  placeholder="Enter Name" />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Control type="email" name='email' onChange={getData} placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Control onChange={getData} name='date' type="date" />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                                <Form.Control type="password" name='password' onChange={getData} placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" onClick={addData} className='col-lg-6' type="submit">
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-3'> Already have an Account <span> <NavLink to="/login">SignIn</NavLink></span></p>
                    </div>
                    <div className="left_data">
                        <Sign_img />
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home