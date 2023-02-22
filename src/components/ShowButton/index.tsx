import React from "react"
import { SiOpenai } from "react-icons/si"
import { ShowButtonProps } from "./types"

const ShowButton = (props: ShowButtonProps) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-3 rounded-full fixed bottom-5 right-5 shadow z-50"
      onClick={props.setShow}
    >
      <SiOpenai className="text-2xl" />
    </button>
  )
}

export default ShowButton
