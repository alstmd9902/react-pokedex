import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Detail from "../pages/Detail";
import Favorite from "../pages/Favorite";
import Main from "../pages/Main";
import Search from "../pages/Search";
import Layout from "./Layout";

function Routers() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,

      children: [
        { index: true, element: <Main /> },
        { path: "detail/:pokemonId", element: <Detail /> },
        { path: "favorite", element: <Favorite /> },
        { path: "search", element: <Search /> }
      ]
    }
  ]);
  return <RouterProvider router={router} />;
}
export default Routers;
