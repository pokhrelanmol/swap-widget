import { FiSettings } from "react-icons/fi"
import Button from "../elements/Button"
import Input from "../elements/Input"
import SearchModal from "../SearchModal"
import { useWidgetContext } from "./WidgetProvider"
import { CgArrowsExchangeAltV } from "react-icons/cg"
import { useState } from "react"
import ButtonConnect from "../elements/ButtonConnect"

const SwapWidget = () => {
  const [type, setType] = useState<"to" | "from">("to")
  const { showSearchModal, toToken, fromToken, setToToken, setFromToken, toggleSearch } =
    useWidgetContext()

  const handleClick = (type: "to" | "from") => {
    setType(type)
    toggleSearch()
  }

  const updateAmount = (e: React.ChangeEvent<HTMLInputElement>, from: boolean) => {
    const amount = e.target.value
    if (from) {
      setFromToken({ ...fromToken, amount: amount })
    } else {
      setToToken({ ...toToken, amount: amount })
    }
  }

  return (
    <div className="fixed w-[400px] h-[80Vh] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] shadow-sm bg-[#14213d] text-white rounded-lg">
      <div
        className="w-full px-5 py-2 border-b border-gray-600 rounded-t
     dark:border-gray-600 flex items-center justify-between focus:border-gray-300"
      >
        <h1 className="text-xl">Swap</h1>
        <button className="h-full border-non bg-transparent outline-none px-3">
          <FiSettings className="cursor-pointer" />
        </button>
      </div>
      <div className="relative mt-1 rounded-md shadow-sm px-5 h-[80%] overflow-scroll scrollbar-hide">
        {showSearchModal ? (
          <SearchModal type={type} />
        ) : (
          <div className="flex flex-col h-full relative">
            <div className="flex flex-col justify-center items-center mt-5 h-[45%] bg-gray-600 rounded-lg">
              <Input
                onChange={(e) => {
                  updateAmount(e, true)
                }}
                type="number"
                value={fromToken.amount}
                placeholder="0.00"
                id="price"
                className="px-4 py-7 text-2xl border border-gray-500 text-gray-400 outline-none font-mono w-full rounded-lg bg-transparent"
              >
                <Button token={fromToken} onClick={() => handleClick("from")} />
              </Input>
            </div>

            <CgArrowsExchangeAltV
              className="text-6xl text-gray-400 p-1 border border-[#ccc] bg-bg rounded-full
               hover:animate-pulse transition duration-300 absolute top-[45%] left-[50%]
              -translate-x-[50%] -translate-y-[50%]
            "
            />

            <div className="flex flex-col justify-center items-center mt-5 h-[40%] bg-gray-600 rounded-lg">
              <Input
                onChange={(e) => updateAmount(e, false)}
                placeholder="0.00"
                id="price"
                type="number"
                value={toToken.amount}
                className="px-4 py-7 text-2xl border border-gray-500 text-gray-400 outline-none font-mono w-full rounded-lg bg-transparent"
              >
                <Button token={toToken} onClick={() => handleClick("to")} />
              </Input>
            </div>
          </div>
        )}
      </div>
      <div className="w-full flex justify-center mb-4">
        <ButtonConnect />
      </div>
    </div>
  )
}

export default SwapWidget
