import "./index.css"

import React from "react"
import ReactDOM from "react-dom/client"

import { App } from "./App"
import { ToastContextProvider } from "./contexts"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ToastContextProvider>
      <App />
    </ToastContextProvider>
  </React.StrictMode>,
)
