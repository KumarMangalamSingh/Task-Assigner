import React, { useState } from 'react'
import loginimg from "../../assets/login image.jpg"
function Login({handelLogin}) {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('')
  const submitHandler=(e)=>{
    e.preventDefault()
    handelLogin(email,password)
    console.log("email is",email);
    console.log("Password is",password);
    setEmail("");
    setPassword("");
  }
 
  return (
    <div className='flex h-screen w-screen items-center justify-center 
    bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${loginimg})` }}
    >
      
      <div className=' p-13 bg-pink-100'>
        <form className='flex flex-col items-center justify-center rounded p-3' onSubmit={(e)=>{
          {submitHandler(e)}
        }}>
          <input required className=' w-full border-2 rounded-full text-center border-black outline-none py-3 px-5 bg-transparent placeholder:text-black text-black !text-black'  type="email"    
          value={email}   
           onChange={(e)=>{
            setEmail(e.target.value)
           }}placeholder='Enter your email'/>

        <input required className=' w-full mt-3 border-2 rounded-full text-center border-black outline-none py-3 px-5 bg-transparent placeholder:text-black text-black !text-black'  type="password" value={password} onChange={(e)=>{
          setPassword(e.target.value);
        }}placeholder='Enter password' />

        <button className=' w-full mt-5 text-center bg-blue-500 outline-none py-3 px-5  placeholder:text-white rounded-full font-semibold '>Log In</button>
        </form>
      </div>
      
    </div>
  )
}

export default Login
