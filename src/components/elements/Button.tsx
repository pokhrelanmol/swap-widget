import React from "react"
import { MdKeyboardArrowDown } from "react-icons/md"
import { useWidgetContext } from "../SwapWidget/WidgetProvider"

const Button = () => {
  const { toggleSearch, selectedToken } = useWidgetContext()
  return (
    <button
      className=" bg-[#43a098] text-white px-3 py-2 rounded-lg font-bold text-sm flex absolute right-1 top-[50%] -translate-y-[50%]"
      onClick={() => toggleSearch()}
    >
      <img
        src={selectedToken.logoURI}
        alt="ethereum"
        className="w-5 h-5 mr-1 rounded-full overflow-hidden p-[1px] border"
      />
      {selectedToken.symbol}
      <MdKeyboardArrowDown className="text-xl ml-1" />
    </button>
  )
}

export default Button
