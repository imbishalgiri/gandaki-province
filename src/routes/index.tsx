import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/homepage.layout";
import HomeComponent from "../pages/home/home.component";
import GalleryComponent from "../pages/gallery/gallery.component";

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
  {
    path: "/gallery",
    element: <HomeLayout />,
    children: [
      {
        path: "",
        element: <GalleryComponent />,
      },
    ],
  },
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "*",
        element: <HomeComponent />,
      },
    ],
  },
]);

export default Router;
