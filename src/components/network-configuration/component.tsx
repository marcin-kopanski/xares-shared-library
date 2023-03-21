import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import axios from "axios"
import { FC, lazy, PropsWithChildren, Suspense, useEffect, useState } from "react"

const queryClient = new QueryClient()

const ReactQueryDevtoolsProduction = lazy(() =>
  import("@tanstack/react-query-devtools/build/lib/index.prod.js").then((d) => ({
    default: d.ReactQueryDevtools,
  })),
)

export const NetworkConfiguration: FC<PropsWithChildren> = ({ children }) => {
  const [showDevtools, setShowDevtools] = useState<boolean>(false)

  useEffect(() => {
    // @ts-ignore
    window.toggleDevtools = () => setShowDevtools((old) => !old)

    axios.defaults.baseURL = "https://api.example.com"
    // axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
    // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

    axios.interceptors.request.use(
      function (config) {
        // Do something before request is sent
        return config
      },
      function (error) {
        // Do something with request error
        return Promise.reject(error)
      },
    )

    // Add a response interceptor
    axios.interceptors.response.use(
      function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response
      },
      function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error)
      },
    )
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen />
      {showDevtools && (
        <Suspense fallback={null}>
          <ReactQueryDevtoolsProduction />
        </Suspense>
      )}
    </QueryClientProvider>
  )
}