import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import WidgetProvider from "./components/SwapWidget/WidgetProvider"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <WidgetProvider>
      <App />
    </WidgetProvider>
  </React.StrictMode>
)
