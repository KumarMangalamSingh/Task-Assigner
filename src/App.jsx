import { useContext, useEffect, useState } from "react"
import Login from "./components/Auth/Login"
import Admin from "./components/Dashboard/Admin"
import Employee from "./components/Dashboard/Employee"
import { getLocalStorage, setLocalStorage } from "./utils/localStorage"
import { AuthContext } from "./context/AuthProvider"



function App() {
 const [user,setUser]=useState(null)

 const handelLogin=(email,password)=>{
  if(email=='admin@me.com'&& password=='123'){
    setUser('Admin')
  }
  else if(email=='user@123.com'&& password=='123'){
   setUser('Employee')
  }
  else{
    alert("Invalid Credentials")
  }
 }
 const data=useContext(AuthContext)
 console.log(data)


  return (
    <>
     {!user?<Login handelLogin={handelLogin} />:""}
     {user=='Admin'? <Admin/>:<Employee/>}

  
    </>
  )
}

export default App
