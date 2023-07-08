import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/homepage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "",
        element: (
          <div>
            <h1>this is inside home</h1>
            <br />
            <br />
            <br />
            <br />
            Hello there
          </div>
        ),
      },
    ],
  },
]);

export default Router;
