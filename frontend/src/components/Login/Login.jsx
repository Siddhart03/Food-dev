import React, { useContext, useState } from 'react'
import './Login.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'
import axios from "axios"

const Login = ({setShowLogin}) => {

    const {url, setToken} = useContext(StoreContext) 
    const [currState,setCurrState] = useState("login")
    const [data,setData] = useState({
      name:"",
      email:"",
      password:""
    })
    const onChangeHandler = (event) =>{
      const name = event.target.name;
      const value = event.target.value;
      setData(data=>({...data,[name]:value}))
    }
    const onLogin = async(event) =>{
        event.preventDefault()
        let newUrl = url;
        if (currState==="login"){
          newUrl +="/api/user/login"
        }
        else{
          newUrl += "/api/user/register"
        }
        const response = await axios.post(newUrl,data);

        if(response.data.success){
          setToken(response.data.token);
          localStorage.setItem("token",response.data.token)
          setShowLogin(false)
        }
        else{
          alert(response.data.message)
        }
    }
    
  return (
    <div className='Login'> 
     <form onSubmit={onLogin} className="login-container">
        <div className="login-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon}  alt="" />
        </div>
        <div className="login-inputs">
            {currState==="login"?<></>: <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='your name'  required/>}
           
            <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='your email' required />
            <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='password' required />
        </div>
        <button type='submit'>{currState==="sign up"?"create account":"login"}</button>
        <div className="login-condition">
            <input type="checkbox" required />
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currState==="login"? <p>create a new account?<span onClick={()=>setCurrState("sign up")}>Click here</span></p> 
                          :<p>already have an account? <span onClick={()=>setCurrState("login")}>Login here</span></p>}
       
        
     </form>
    </div>
  )
}

export default Login