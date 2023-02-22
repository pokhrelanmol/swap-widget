import { FiSettings } from "react-icons/fi"
import Button from "../elements/Button"
import Input from "../elements/Input"
import SearchModal from "../SearchModal"
import { useWidgetContext } from "./WidgetProvider"
import { CgArrowsExchangeAltV } from "react-icons/cg"

const SwapWidget = () => {
  const { showSearchModal } = useWidgetContext()
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
          <SearchModal />
        ) : (
          <div className="flex flex-col h-full relative">
            <div className="flex flex-col justify-center items-center mt-5 h-[45%] bg-gray-600 rounded-lg">
              <Input
                placeholder="0.00"
                id="price"
                className="px-4 py-7 text-2xl border border-gray-500 text-gray-400 outline-none font-mono w-full rounded-lg bg-transparent"
              >
                <Button />
              </Input>
            </div>

            <CgArrowsExchangeAltV
              className="text-6xl text-gray-400 p-1 border border-[#ccc] bg-bg rounded-full
               hover:animate-pulse transition duration-300 absolute top-[50%] left-[50%]
              -translate-x-[50%] -translate-y-[50%]
            "
            />

            <div className="flex flex-col justify-center items-center mt-5 h-[45%] bg-gray-600 rounded-lg">
              <Input
                placeholder="0.00"
                id="price"
                className="px-4 py-7 text-2xl border border-gray-500 text-gray-400 outline-none font-mono w-full rounded-lg bg-transparent"
              >
                <Button />
              </Input>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default SwapWidget
