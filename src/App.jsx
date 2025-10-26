import { useState, useEffect } from "react"
import HomePage from "./Pages/HomePage";
import { Routes,Route, useLocation } from "react-router";
import Aboutpage from "./Pages/Aboutpage";
import Header from "./Components/Header";
import CoinDetails from "./Components/CoinDetails";
import Signup from "./Components/SignUp";
import Login from './Components/Login'

const API_URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&names=Bitcoin&symbols=btc&category=layer-1&price_change_percentage=1h";


const App = () => {
const [coins, setcoins] = useState([])
const [limit, setlimit] = useState(80);
const [filter, setfilter] = useState("")

const location = useLocation()
const invalidpaths =["/","/Login"];

   useEffect(() => {
    const fetchcoins = async()=>{
      try {
       const res = await fetch(`${API_URL}&per_page=${limit}`)
       if(!res.ok) throw new Error("Oops!!Can't Load the Coins.");
       const data = await res.json()
       console.log(data);
       setcoins(data);
      } catch (error) {
        console.error(error.message);
      }
      
    }
    fetchcoins()
   },
     [limit]);

 // searchbar filtering...
    

  return (
    <div className="bg-[#1d1e2b]">
      
      
      {!invalidpaths.includes(location.pathname)&& <Header/>}
      <Routes>
        <Route path="/Home" element={<HomePage
         coins={coins}
         filter={filter}
         setfilter={setfilter}
         limit={limit}
         setlimit={setlimit}
         />}></Route>
         <Route path="About" element={<Aboutpage/>}/>
         <Route path="/coin/:id" element={<CoinDetails/>}/>
         <Route path="/" element={<Signup/>}/>
        <Route path="Login" element={<Login/>}/>

      </Routes>
      
    </div>
  )
}

export default App


