import React, { createContext } from 'react'

export const AuthContext=createContext()



function AuthProvider({children}) {
  return (
    <div>
      <AuthContext.Provider value={"Mangalam"}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
