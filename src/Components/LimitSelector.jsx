
const LimitSelector = ({limit, OnLimitChange}) => {
  return (
    <div>
         <div className="controls bg-[#2a2350] w-[100px] rounded-xl p-2.5 flex items-center gap-2">
          <label htmlFor="Limit" className=" font-bold text-[#f5f5f5]">
            Show:
          </label>
          <select value={limit} onChange={(e)=>OnLimitChange(Number(e.target.value))} className="text-[#f5f5f5]">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="70">Show All</option>
          </select>
          </div>
         </div>
  )
}

export default LimitSelector


// controls bg-[#2a2350]  w-[26] rounded-xl p-2.5