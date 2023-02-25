import React from "react"

type Props = {
  children?: React.ReactNode
  text?: string
  onClick?: () => void
  id?: string
  className?: string
  type?: "button" | "submit" | "reset"
}
const ButtonConnect = (props: Props) => {
  return (
    <div className="flex justify-center">
      <button className="bg-[#fca311] text-white px-5 py-[12px] tracking-wider text-lg  rounded-lg font-medium uppercase">
        Connect Wallet
        {props.children}
      </button>
    </div>
  )
}

export default ButtonConnect
