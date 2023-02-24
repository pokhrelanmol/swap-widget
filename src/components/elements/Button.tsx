import React from "react"
import { MdKeyboardArrowDown } from "react-icons/md"
import { TokenData } from "../SwapWidget/types"
import { useWidgetContext } from "../SwapWidget/WidgetProvider"

type ButtonProps = {
  token: TokenData
  className?: string
  onClick: () => void
}

const Button = (props: ButtonProps) => {
  return (
    <button
      className={
        props.className
          ? props.className
          : "bg-[#43a098] text-white px-3 py-2 rounded-lg font-bold text-sm flex absolute right-1 top-[50%] -translate-y-[50%]"
      }
      onClick={props.onClick}
    >
      <img
        src={props.token.logoURI}
        alt="ethereum"
        className="w-5 h-5 mr-1 rounded-full overflow-hidden p-[1px] border"
      />
      {props.token.symbol}
      <MdKeyboardArrowDown className="text-xl ml-1" />
    </button>
  )
}

export default Button
