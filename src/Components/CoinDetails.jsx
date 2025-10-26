import { Link, useParams } from "react-router"
import { useState,useEffect } from "react";
import CoinChart from "./CoinChart";
const CoinDetails = () => {
    const {id} = useParams();
     const [coins, setcoins] = useState("")
     const [loading, setloading] = useState(true)

    useEffect(()=>{
            const fetchcoin = async ()=>{
            const res =  await fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
            const data = await res.json()
            console.log("Hey i am from coin details", data)
            setcoins(data)
            setloading(false);
        }
        fetchcoin()
    },[id])

  return (
    <div className=" container h-full">
        <div className="flex justify-start pl-4">
        <Link to="/Home" className="text-white text-center "> ◀️ Back To Home </Link>
        </div>
        {loading && (
  <div className="flex justify-center items-center h-screen">
    <div className="w-12 h-12 border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
  </div>
)}
        <div className="coin-details flex justify-center p-4">
        <h1 className="text-white text-center font-bold text-2xl ">{coins.name}</h1>
        </div>
         <div className="flex flex-col justify-center">
        <div className=" flex justify-center ">
        <img
          src={coins.image?.large}
          className="w-36 h-36 rounded-2xl"
          alt={coins.name}
        />
        </div>
        <div className="flex flex-col justify-center items-center gap-2 mt-2 ">
        <p className="text-white text-center   w-[60%]">{coins.description?.en.split('. ')[0] + '.'}</p>
        <h1 className="text-white font-bold ">  Rank: #{coins.market_cap_rank}</h1>
        <h3 className="text-white font-bold "> Current Price: ${coins.market_data?.current_price.usd.toLocaleString()}</h3>
        <h3 className="text-white font-bold"> Market Cap: ${coins.market_data?.market_cap.usd.toLocaleString()}</h3>
        <h3 className="text-white font-bold"> 24h High : ${coins.market_data?.high_24h.usd.toLocaleString()}</h3>
        <h3 className="text-white font-bold"> 24h Low : ${coins.market_data?.low_24h.usd.toLocaleString()}</h3>
        <h3 className="text-white font-bold"> 24h Price Change : ${(coins.market_data?.price_change_24h.toFixed(2))}{' '}({coins.market_data?.price_change_percentage_24h.toFixed(2)}%)</h3>
        </div>
        <CoinChart className="text-white text-center"/>
        <div className="coin-links">
            {coins?.links?.homepage?.[0]&& (
                <p className=" text-blue-400 font-semibold text-center mt-4">   
                    <Link  to={coins.links.homepage[0]}> 🌍 Website</Link>
                </p>
            )}
            {coins?.links?.blockchain_site?.[0]&& (
                <p className="text-blue-400 font-semibold text-center ">   
                    <Link  to={coins.links.blockchain_site[0]}> Blockchain Explorer</Link>
                </p>
            )}
        </div>

      </div>

        </div>
  )
}

export default CoinDetails