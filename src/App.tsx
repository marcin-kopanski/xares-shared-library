import { Button } from "@mui/material"

import { useToasts } from "./contexts"

export const App = () => {
  const toasts = useToasts()

  return (
    <div className="App">
      <Button onClick={() => toasts.showInfo("toast")}>Toast</Button>
    </div>
  )
}
