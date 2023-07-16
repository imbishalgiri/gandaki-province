import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/homepage.layout";
import HomeComponent from "../pages/home/home.component";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "",
        element: <HomeComponent />,
      },
    ],
  },
]);

export default Router;
