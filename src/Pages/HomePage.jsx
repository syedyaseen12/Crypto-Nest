import CryptoCard from "../Components/CryptoCard";
import LimitSelector from "../Components/LimitSelector";
import Searchbar from "../Components/Searchbar";
import ProfileAuth from "../Components/ProfileAuth";

const HomePage = ({coins, limit, setlimit, filter,setfilter,}) => {
     const filterddata = coins.filter((filt)=> {
      return filt.name.toLowerCase().includes(filter.toLowerCase())
     })
  return (
     <div className="bg-[#1d1e2b] h-full">
       <div>
     <h1 className="text-center text-4xl font-bold  text-[#f5f5f5] drop-shadow-[0_0_10px_rgba(168,85,247,0.6)]">
  Crypto-Nest 
</h1>
<ProfileAuth/>
</div> 

        <div className="flex items-center justify-between w-full px-4 mt-4">
          {/* <div className=" flex-1 flex justify-center ml-32 mt-3 ">
         <Searchbar filterd={filter} setfilterd={setfilter}/>
          </div>
         <LimitSelector Limit={limit} OnLimitChange={setlimit}/>

        </div> */}
        <div className="flex justify-end items-center gap-4 mt-3">
  <Searchbar filterd={filter} setfilterd={setfilter}/>
  <LimitSelector limit={limit} OnLimitChange={setlimit}/>
</div>

      
        
        <div className="w-full flex flex-wrap justify-center mt-4 ">
          {filterddata.length === 0 ? <p className="text-amber-50 h-screen">Oops!! Can't Load the Coins</p>
          :
          filterddata.map((coin,id)=>(
         <CryptoCard key={id} coin ={coin}/>
          ))}
        </div>
       
</div>
    </div>
  )
}

export default HomePage