import React, { useState } from "react"
import logo from "../images/Abstraction.png"
import google from "../images/google.png"
import facebook from "../images/facebook.png"
const Form = ()=>{

   
    const[user, setUser] = useState({name:"", email:"", password:"" , confirmPassword:""})
    const[error,setError] = useState("")
    const[success,setSuccess] = useState("")

    function handleFormSubmit(event){
        event.preventDefault()
        if(user.name === "" || user.email === "" || user.password === "" || user.confirmPassword === ""){
            setSuccess("")
           return setError("Make sure you entered all feilds") 
        }else if(user.password !== user.confirmPassword){
            setSuccess("")
            return setError("Please Make sure your passwords and confirm passwords match!") 
        }else{
            setError("")
           return setSuccess("Successfully Created!") 
        }
    }
    
    return (
        <div className="container">

        <div className="left-img">
        <p>Find 3D Objects, Mockups and Ilustration here</p>
        <img src={logo} alt="logo"></img>
        </div>
            

        <div className="right display-form">
        
        <div className="top-part">
        <h1 className="heading">Create Account</h1>
            <div className="social-login">
            <a href="#">
            <img src={google} width="30" height="30" alt="goole-icon"></img>
            <span>Sign Up with Google</span>
            </a>
            
                <a href="#">
                <img src={facebook }width="30" height="30" alt="facebook-icon"></img>
                <span>Sign Up with Facebook</span></a>
            </div>
                

            <div className="or">--OR--</div>
       
        

            <form className="form" onSubmit={handleFormSubmit}>
                <div className="input-group">
                <input type="text" placeholder="Full Name"  onChange={(e)=>{setUser({...user,name:e.target.value})}} value={user.name}></input>
                </div>
                

                <div className="input-group">
                <input type="email" placeholder="Email Address"  onChange={(e)=>{setUser({...user,email:e.target.value})}} value={user.email}></input>
                
                </div>
                

                <div className="input-group">
                <input type="password" placeholder="Password"  onChange={(e)=>{setUser({...user,password:e.target.value})}} value={user.password}></input>
                
                </div>
               
                <div className="input-group">
                <input type="password" placeholder="Confirm Password"  onChange={(e)=>{setUser({...user,confirmPassword:e.target.value})}} value={user.confirmPassword}></input>

                </div>  

                <button>Create Account</button>
                {
                    error && <p style={{marginTop:"20px",color:"red",fontSize:"1.3rem",textAlign:"center"}}>Error: {error}</p>
                }
                {
                    success && <p style={{marginTop:"20px",color:"#b1d9db" ,fontSize:"1.3rem" ,textAlign:"center"}}>{success}</p>
                }
            </form>
        </div>
        </div>
        </div>
    )
}

export default Form