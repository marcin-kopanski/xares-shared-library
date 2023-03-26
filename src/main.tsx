import "./index.css"

import axios from "axios"
import React from "react"
import ReactDOM from "react-dom/client"

import { App } from "./App"
import { NetworkConfiguration } from "./components/network-configuration"
import { ToastContextProvider } from "./contexts"

export const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
})

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <NetworkConfiguration axiosInstance={axiosInstance}>
      <ToastContextProvider>
        <App />
      </ToastContextProvider>
    </NetworkConfiguration>
  </React.StrictMode>,
)
