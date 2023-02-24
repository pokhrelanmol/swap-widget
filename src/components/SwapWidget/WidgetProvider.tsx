import React, { useState, createContext, useContext } from "react"
import { TokenData } from "./types"

export interface WidgetContextProps {
  showWidgetModal: boolean
  showSearchModal: boolean
  toToken: TokenData
  fromToken: TokenData
  toggleWidget: () => void
  toggleSearch: () => void
  setToToken: (token: TokenData) => void
  setFromToken: (token: TokenData) => void
}

export const WidgetContext = createContext<WidgetContextProps>({
  showSearchModal: false,
  showWidgetModal: false,
  toToken: {},
  fromToken: {},
  toggleWidget: () => {},
  toggleSearch: () => {},
  setToToken: (token: TokenData) => {},
  setFromToken: (token: TokenData) => {},
})

export const useWidgetContext = () => {
  return useContext(WidgetContext)
}

const WidgetProvider = ({ children }: { children: React.ReactNode }) => {
  const toggleWidget = () => {
    setWidgetData((prev) => ({ ...prev, showWidgetModal: !prev.showWidgetModal }))
  }

  const toggleSearch = () => {
    setWidgetData((prev) => ({ ...prev, showSearchModal: !prev.showSearchModal }))
  }

  const setToToken = (token: TokenData) => {
    setWidgetData((prev) => ({ ...prev, toToken: token }))
  }

  const setFromToken = (token: TokenData) => {
    setWidgetData((prev) => ({ ...prev, fromToken: token }))
  }

  const [widgetData, setWidgetData] = useState({
    showWidgetModal: false,

    showSearchModal: false,
    toToken: {},
    fromToken: {},
    toggleWidget,
    toggleSearch,
    setToToken,
    setFromToken,
  })

  console.log("widgetData", widgetData)

  return <WidgetContext.Provider value={widgetData}>{children}</WidgetContext.Provider>
}

export default WidgetProvider
