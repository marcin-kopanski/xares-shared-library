import { Button } from "@mui/material"
import { useQuery } from "@tanstack/react-query"

import { axiosInstance } from "./components/network-configuration"
import { useToasts } from "./contexts"

export const App = () => {
  const toasts = useToasts()

  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: () => axiosInstance.get(`/products`).then((res) => res.data),
  })

  return (
    <div className="App">
      <Button onClick={() => toasts.showInfo("toast")}>Toast</Button>

      {data && data.map((element: any) => element.name)}
    </div>
  )
}
