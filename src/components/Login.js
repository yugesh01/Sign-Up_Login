import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import Sign_img from './Sign_img';

function Login() {

    const [inpVal, setInputVal]=useState({
       
        email:"",
        password:""
    })
const [data,setdata]=useState([]);
    // console.log(inpVal)
    const history=useNavigate();

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
    const getUserArr= localStorage.getItem("userdata")
    console.log(getUserArr);

    const {email,password}=inpVal;
    if(email===""){
        alert( "email is require")
    }
    else if(!email.includes("@")){
        alert( "enter valid emaol")

    }
    else if(password===""){
        alert( "password is require")

    }
    else if(password<5){
        alert( "password must have atleast 6 charector")

    }
    else{
        if(getUserArr && getUserArr.length){
            const userdeta= JSON.parse(getUserArr);
            const userlogin= userdeta.filter((el,k)=>{
                return el.email===email && el.password=== password
            });
           if(userlogin.length===0){
            alert("invalid details")
           }
           else{
            console.log("succsess")
            history('/details')
           }
        }
        

    }

    }
  return (
    <>
         <div className="canteneer mt-3" >
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-6" style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6'>Sign in</h3>
                        <Form>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Control type="email" name='email' onChange={getData} placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                                <Form.Control type="password" name='password' onChange={getData} placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" onClick={addData} className='col-lg-6' type="submit">
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-3'> Already have an Account <span>SignIn</span></p>
                    </div>
                    <div className="left_data">
                        <Sign_img />
                    </div>
                </section>
            </div>
    </>
  )
}

export default Login