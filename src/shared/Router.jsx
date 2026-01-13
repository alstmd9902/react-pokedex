import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loading from "../components/Loading";
import Layout from "./Layout";
const Detail = lazy(() => import("../pages/Detail"));
const Favorite = lazy(() => import("../pages/Favorite"));
const Main = lazy(() => import("../pages/Main"));
const Search = lazy(() => import("../pages/Search"));

function Routers() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<Loading />}>
              <Main />
            </Suspense>
          )
        },
        {
          path: "detail/:pokemonId",
          element: (
            <Suspense fallback={<Loading />}>
              <Detail />
            </Suspense>
          )
        },
        {
          path: "favorite",
          element: (
            <Suspense fallback={<Loading />}>
              <Favorite />
            </Suspense>
          )
        },
        {
          path: "search",
          element: (
            <Suspense fallback={<Loading />}>
              <Search />
            </Suspense>
          )
        }
      ]
    }
  ]);
  return <RouterProvider router={router} />;
}
export default Routers;
