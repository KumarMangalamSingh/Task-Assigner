import { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import Admin from "./components/Dashboard/Admin";
import Employee from "./components/Dashboard/Employee";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const [user, setUser] = useState(null);
  const [Userdata,setUserdata]=useState(null)
  const [userData,setUserData] = useContext(AuthContext);
  


  const handelLogout=()=>{
    localStorage.removeItem("loggedInUser");
    setUser(null);
  }
    
  const handelLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("Admin");
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}));
    } 
    else if (userData)
       {
  const employee=userData.find((e) => email == e.email && password == e.password);

      if(employee){
        setUser('employee')
        setUserdata(employee)
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))
      }  
      
    }
     else {
      alert("Invalid Credentials");
    }
  };



  return (
    <>
      {!user ? (
        <Login handelLogin={handelLogin} />
      ) : user === "Admin" ? (
        <Admin handelLogout={handelLogout} />
      ) : (
        <Employee handelLogout={handelLogout}  data={Userdata}/>
      )}
    </>
  );
}

export default App;
