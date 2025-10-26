import { useState,useEffect } from "react"
import { Line } from "react-chartjs-2"
import{
Chart as ChartJS,
CategoryScale,
LinearScale,
PointElement,
LineElement,
Tooltip,
Legend,
TimeScale
}from'chart.js'

import 'chartjs-adapter-date-fns'

ChartJS.register(
CategoryScale,
LinearScale,
PointElement,
LineElement,
Tooltip,
Legend,
TimeScale
)

const CoinChart = () => {
    const API= "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/?vs_currency=usd&days=7"
    const [coindata, setCoinData]= useState()
    useEffect(()=>{
   const fetchPrice = async ()=>{
    const res = await fetch(API);
    const data = await res.json()
    const prices = data.prices.map((price)=>({
        x:price[0],
        y:price[1]
    }))
      console.log("Prices fetched:", prices);
        setCoinData({
            datasets:[
                {
                label:'Price (USD)',
                data:prices,
                fill:true,
                borderColor:'#5e4b8b',
                backgroundColor:'white',
                pointRadius:0,
                tension:0.3,
                }
            ]
   });
   }
   fetchPrice()
    },[]);
 if (!coindata) {
    return <div className="text-white text-center mt-2">Loading chart...</div>
  }
  return (
    <div className="text-white text-center mt-6">
        <h3 className="text-xl ">Weekly Bitcoin Price Overview</h3>
    <Line data={coindata} 
         options={{
        responsive:true,
        plugins:{
        legend:{display:false,},
        tooltip:{mode:'index', intersect:false}
        },
        scales:{
            x:{
                type:'time',
                time:{
                    unit:'day'
                },
                ticks:{
                    autoSkip:true,
                    maxTicksLimit:7,
                    color:"white",
                },
                grid: {
                color: 'rgba(255,255,255,0.2)' 
             }
            },
            y:{
          ticks:{
           callback:(value)=>`$${value.toLocaleString()}`,
           color:"white",
      },
      grid: {
                color: 'rgba(255,255,255,0.2)' 
    }
            }
        }
    }}/>
    </div>
  )
}

export default CoinChart


