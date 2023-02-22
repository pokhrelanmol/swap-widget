import React from "react"
import { FiSettings } from "react-icons/fi"
import { MdClose } from "react-icons/md"
import Input from "../elements/Input"
import TokenItem from "../elements/TokenItem"
import { tokenData } from "../../constants/mockdata"

type ModalProps = {
  show: boolean
  setShow: (prev: boolean) => void
}

const Modal = ({ show, setShow }: ModalProps) => {
  console.log(tokenData)
  const [tokens, setTokens] = React.useState(tokenData.tokens.slice(0, 20))
  console.log(typeof tokens)
  return (
    <div
      className="flex justify-center items-center w-screen h-screen fixed top-0 left-0 bg-[rgba(0,0,0,0.2)] shadow-2xl z-50"
      style={{ display: show ? "flex" : "none" }}
    >
      <div className="absolute w-[400px] h-[400px] shadow-sm bg-[#14213d] text-white rounded-lg">
        <button
          className="absolute -top-7 -right-3 text-2xl text-gray-400 hover:text-red-900"
          onClick={() => {
            setShow(false)
          }}
        >
          <MdClose className="cursor-pointer" />
        </button>
        <div
          className="w-full px-5 py-2 border-b border-gray-600 rounded-t
     dark:border-gray-600 flex items-center justify-between focus:border-gray-300"
        >
          <h1 className="text-xl">Swap</h1>
          <button className="h-full border-non bg-transparent outline-none px-3">
            <FiSettings className="cursor-pointer" />
          </button>
        </div>

        <div className="relative mt-1 rounded-md shadow-sm px-5 h-[70%]">
          <Input
            type="text"
            placeholder="0.00"
            id="price"
            className="my-1 px-4 py-1 text-xl border border-gray-600 text-gray-400 outline-none font-mono w-full rounded-lg bg-transparent"
          />

          <ul className=" list-none h-full overflow-y-scroll overflow-x-hidden scrollbar-hide">
            {tokens.map((token) => (
              <TokenItem
                key={token.address}
                tokenName={token.name}
                tokenImage={token.logoURI}
                tokenSymbol={token.symbol}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Modal
