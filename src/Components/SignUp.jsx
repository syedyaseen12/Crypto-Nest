import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebaseconfig";
import world from "../assets/World."
import { Link, useNavigate } from "react-router";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [error, setError] = useState("")
    const navigate = useNavigate()

  const handleSignup = async (e) => {
    e.preventDefault(); 
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, Password);
      console.log("User signed up:", userCredential.user);
      navigate("/Home")
    } catch (error) {
      if(error.code === "auth/email-already-in-use"){
      setError("This email is already registered. Try logging in.");
      }else if (error.code === "auth/weak-password") {
      setError("Password is too weak. Must be at least 6 characters.");
    } else if (error.code === "auth/invalid-email") {
      setError("Invalid email format.");
    } else {
      setError("Something went wrong. Please try again.");
    }
      console.error("Error signing up:", error.message);
    }
  };

  return (
    <div className="h-screen ">
      <h2 className="text-center pt-2 text-3xl font-bold text-white tracking-wide mb-2">
  CryptoNest
</h2>
<h1 className="text-center text-2xl font-bold text-white tracking-wide pt-2">
  Create Your Account
</h1>
<p className="text-center text-gray-400 mt-2 text-base max-w-md mx-auto leading-relaxed">
  Join now and start tracking your favorite cryptocurrencies — all in one place.
</p>


      <div className="flex justify-center">
        <img src={world} className="w-56 h-48"/>
      </div>
    <form onSubmit={handleSignup} >
      <div className="flex flex-col justify-center items-center  mt-4 gap-4 ">
      <input
      className="text-center px-5 py-1.5  border-2-200 bg-white text-black rounded-xl "
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
      className="text-center px-5 py-1.5  border-2-200 bg-white text-black rounded-xl"
        type="password"
        placeholder="Enter your password"
        value={Password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <div className=" flex flex-col gap-6 ">
      <button  className="text-white px-3 py-1 rounded-xl duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition" type="submit">Sign Up</button>
      <Link to="/Login" className="border border-purple-400 text-purple-300 hover:bg-purple-500/20 hover:text-white transition rounded-xl px-4 py-2 font-medium">Login here</Link>
      </div>
      </div>
    </form>
    </div>
  );
};

export default Signup;
