import { Button } from "@mui/material"
import { useQuery } from "@tanstack/react-query"

import { useToasts } from "./contexts"
import { axiosInstance } from "./main"
import { ArrayUtils } from "./utils"

export const App = () => {
  const toasts = useToasts()

  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: () => axiosInstance.get(`/products`).then((res) => res.data.products),
  })

  return (
    <div className="App">
      <Button onClick={() => toasts.showInfo("toast")}>Toast</Button>

      <ul>
        {data &&
          data.map((element: any) => <li key={ArrayUtils.getRandomKey()}>{element.title}</li>)}
      </ul>
    </div>
  )
}
