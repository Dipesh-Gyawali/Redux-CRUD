import { useRoutes } from "react-router-dom";
import { Home } from "../components/home";
import { About } from "../components/about";
import { Product } from "../components/product";
import { Login } from "../components/login";
import { ContactUs } from "../components/contactus";
import { PrivateRoute } from "./privateroute";

export function Routes() {
  let element = useRoutes([
    {
      path: "/",
      element: <Home />,
      //   children: [
      //     {
      //       path: "messages",
      //       element: <DashboardMessages />,
      //     },
      // { path: "tasks", element: <DashboardTasks /> },
      //   ],
    },
    {
      path: "/",
      element: <PrivateRoute />,
      children: [
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
    {
      path: "/",
      element: <PrivateRoute />,
      children: [
        {
          path: "/contactus",
          element: <ContactUs />,
        },
      ],
    },
    {
      path: "/",
      element: <PrivateRoute />,
      children: [
        {
          path: "/product",
          element: <Product />,
        },
      ],
    },

    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return element;
}
