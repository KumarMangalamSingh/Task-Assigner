import React, { useState } from 'react'

function Login() {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('')
  const submitHandler=(e)=>{
    e.preventDefault()
    console.log("email is",email);
    console.log("Password is",password);
    setEmail("");
    setPassword("");
  }
 
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 border-amber-400 p-20 '>
        <form className='flex flex-col items-center justify-center rounded' onSubmit={(e)=>{
          {submitHandler(e)}
        }}>
          <input required className=' w-full border-2 rounded-full text-center border-amber-400 outline-none py-3 px-5 bg-transparent placeholder:text-gray-400'  type="email"    
          value={email}   
           onChange={(e)=>{
            setEmail(e.target.value)
           }}placeholder='Enter your email'/>

        <input required className=' w-full mt-3 border-2 rounded-full text-center border-amber-400 outline-none py-3 px-5 bg-transparent placeholder:text-gray-400'  type="password" value={password} onChange={(e)=>{
          setPassword(e.target.value);
        }}placeholder='Enter password' />

        <button className=' w-full mt-5 text-center bg-amber-400 outline-none py-3 px-5  placeholder:text-white rounded-full font-semibold '>Log In</button>
        </form>
      </div>
      
    </div>
  )
}

export default Login
