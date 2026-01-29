import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import Home from "./pages/Home"
import FetchOld from "./pages/FetchOld"
import FetchRQ from "./pages/FetchRQ"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import FetchInd from "./pages/FetchInd"
import Anime from "./pages/Anime"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/fetch-old",
        element: <FetchOld />
      },
      {
        path: "/fetch-rq",
        element: <FetchRQ />
      },
      {
        path: "/fetch-ind/:id",
        element: <FetchInd />
      },
      {
        path: "/anime/:id",
        element: <Anime />
      }
    ]
  }
])

const App = () => {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App