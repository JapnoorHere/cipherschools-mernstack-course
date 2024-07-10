import React from 'react'
import { useState } from 'react';
import { loginUser } from '../utils/AuthUtil';
import {Link, useNavigate } from 'react-router-dom';

const LoginScreen = () => {

    const [credentials, setcredentials] = useState({email:"", password: ""});
    const navigate= useNavigate();

    const handleLoginSubmit = async(e)=>{
        e.preventDefault();
        console.log(credentials);
       if(validateCredentials()){
      const user = await   loginUser(credentials)
      if(user.type==="LIBRARIAN"){
        navigate("/librarian")
    } else{
          navigate("/student")

      }
       }

    }

    const validateCredentials = ()=>{
       return credentials.email?.length && credentials.password?.length;
    }

    const handleInputChange = (e) =>{
        setcredentials({...credentials, [e.target.name]: e.target.value})
    }
  return (
    <section className="app-section" >
        <h1>Login</h1>
        <span>Do not have an account? SignUp <Link to={"/signup"}>here</Link> </span>
      <form className="ui form" onSubmit={handleLoginSubmit}>
  <div className="field">
    <label>Email</label>
    <input type="email" name="email" placeholder="email" value={credentials.email}
    onChange={handleInputChange} required={true}
    />
  </div>
  <div className="field">
    <label>Password</label>
    <input type="password" name="password" placeholder="password" 
    value={credentials.password} onChange={handleInputChange} required={true} minLength={8}/>
  </div>
  <button className="ui button" type="submit">Submit</button>
</form>
    </section>
  )
}

export default LoginScreen
