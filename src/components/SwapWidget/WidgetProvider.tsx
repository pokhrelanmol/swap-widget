import React, { useState, createContext, useContext } from "react"
import { TokenData } from "./types"

export interface WidgetContextProps {
  showWidgetModal: boolean
  showSearchModal: boolean
  selectedToken: TokenData
  toggleWidget: () => void
  toggleSearch: () => void
  setSelectedToken: (token: TokenData) => void
}

export const WidgetContext = createContext<WidgetContextProps>({
  showSearchModal: false,
  showWidgetModal: false,
  selectedToken: {},
  toggleWidget: () => {},
  toggleSearch: () => {},
  setSelectedToken: (token: TokenData) => {},
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

  const setSelectedToken = (token: TokenData) => {
    setWidgetData((prev) => ({ ...prev, selectedToken: token }))
  }

  const [widgetData, setWidgetData] = useState({
    showWidgetModal: false,
    showSearchModal: false,
    selectedToken: {},
    toggleWidget,
    toggleSearch,
    setSelectedToken,
  })

  console.log("widgetData", widgetData)

  return <WidgetContext.Provider value={widgetData}>{children}</WidgetContext.Provider>
}

export default WidgetProvider
