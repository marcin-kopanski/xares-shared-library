import "./index.css"

import React from "react"
import ReactDOM from "react-dom/client"

import { App } from "./App"
import { NetworkConfiguration } from "./components/network-configuration"
import { ToastContextProvider } from "./contexts"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <NetworkConfiguration>
      <ToastContextProvider>
        <App />
      </ToastContextProvider>
    </NetworkConfiguration>
  </React.StrictMode>,
)
