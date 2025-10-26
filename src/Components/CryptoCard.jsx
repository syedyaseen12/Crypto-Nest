

import {  useNavigate } from "react-router"
    
const CryptoCard = ({coin}) => {
  const navigate = useNavigate()

  const handeleclick =()=>{
    navigate(`/coin/${coin.id}`)
  }
  return (
   <div className=" w-[400px] bg-[#2a2350] border-2 border-[#5e4b8b] rounded-xl m-1">
    <div className="p-2 flex  items-center justify-center gap-4">
      <div className="flex flex-col">
        <h1 className="text-white font-bold">{coin.name}</h1>
            <p className="text-white">{coin.symbol}</p>
      </div>
      <img src={coin.image} alt="" className="w-12 h-12 object-cover"/>
    </div>
    <div className="p-6 space-y-2">
      <p className="text-white font-bold">Price: ${coin.current_price.toLocaleString()}</p>
      <p className="text-[#b49fff]"> {coin.price_change_percentage_24h.toFixed(2)} %</p>
      <p className="text-white font-bold">Market Cap: {coin.market_cap.toLocaleString()}</p>
      <div className="flex justify-center pt-2 ">
        <button  onClick={handeleclick}className="text-white font-semibold rounded-xl bg-[#2a2350] border-2 border-[#5e4b8b]  px-3 py-1">View Details</button>
      </div>
    </div>
   </div>
  )
}

export default CryptoCard