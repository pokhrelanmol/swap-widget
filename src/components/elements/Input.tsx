import React from "react"
import { useWidgetContext } from "../SwapWidget/WidgetProvider"
import { InputProps } from "./types"

const Input = (props: InputProps) => {
  return (
    <div className="my-1 py-1 relative">
      <input
        // onFocus={() => toggleSearch()}
        type={props.type || "text"}
        placeholder={props.placeholder || "Search"}
        value={props.value}
        onChange={props.onChange}
        name={props.name}
        id={props.id}
        className={
          props.className ||
          "w-full h-full text-xl border border-gray-600 text-gray-400 outline-none font-mono rounded-lg bg-transparent"
        }
        style={props.error ? { border: "1px solid red" } : {}}
      />

      {props.children}
    </div>
  )
}

export default Input
