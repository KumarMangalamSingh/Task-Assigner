import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'


export const AuthContext =createContext()

const AuthProvider = ({children }) => {
  // localStorage.clear()
  const [userData,setUserData]=useState(null)

 useEffect(()=>{
 setLocalStorage()
const {emp,adm}=getLocalStorage()
setUserData({emp,adm})
 },[])
 
  return (
    
      <AuthContext.Provider value={userData}>
{children}
      </AuthContext.Provider>
    
  )
}

export default AuthProvider
