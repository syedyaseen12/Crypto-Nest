import React from 'react'

const Searchbar = ({filterd, setfilterd}) => {
  return (
    <div className='rounded-xl w-72 text-[#f5f5f5] text-center justify-center border-2 border-[#5e4b8b] p-2'>
        <input className='' type="text" value={filterd} placeholder='Search up to 100+ Cryptos..' onChange={(e)=>setfilterd(e.target.value)}>
        </input>
    </div>
  )
}

export default Searchbar

