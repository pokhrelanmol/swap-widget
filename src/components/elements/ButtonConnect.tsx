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
    <div>
      <button className="bg-[#fca311] text-white px-5 py-3 tracking-wider text-lg  rounded-lg font-bold">
        Connect Wallet
        {props.children}
      </button>
    </div>
  )
}

export default ButtonConnect
