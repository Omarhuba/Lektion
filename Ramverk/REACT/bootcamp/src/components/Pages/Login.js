import React, { useState } from "react";
// import {getLogin} from '../../api/api'
import axios from 'axios'


export const Login = () => {
  const [token, setToken] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const loginForm = async (e)=>{
    e.preventDefault()
    try{
      const response = await axios.post('http://localhost:8080/api/login', {email, password})
      setToken(response.data.token)
    }catch(err){
      console.log(err.message);
    }
  }
  const logout = ()=>{
    setToken('')
  }
  return (
    <div className='loginForm'>
    {!token && <form onSubmit={loginForm}>
        <input type="email" placeholder="Your email" onChange={(e)=>setEmail(e.target.value)} />
        <input type="text" placeholder="Your password" onChange={(e)=>setPassword(e.target.value)} />
        <button>{''}Login</button>
      </form>}
    {token && <button onClick={logout}>Logout</button>}
</div>
  );
};

