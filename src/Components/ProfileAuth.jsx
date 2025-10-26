import { getAuth, signOut,onAuthStateChanged } from "firebase/auth"
import {auth} from "../Firebaseconfig"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"

 
const ProfileAuth = () => {
const [username, setusername]= useState(null);
  const navigate = useNavigate();

useEffect(()=>{
const subscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    setusername(user)
  }
   else {
     setusername(null);
     navigate("/login");
  }
    });
return () => subscribe(); 

},[])


  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logged out!");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };
 return (
 <div className="text-white text-center pr-6">
      {username ? (
        <div className="flex flex-col justify-end items-end gap-3">
          <p className="text-xl font-medium">Welcome {username?.email?.split("@")[0]}</p>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 px-2 py-1 rounded mr-9"
          >
            Logout
          </button>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </div>
)
}

export default ProfileAuth