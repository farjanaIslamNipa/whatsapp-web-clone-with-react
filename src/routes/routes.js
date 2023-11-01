import { createBrowserRouter } from "react-router-dom";
import SignIn from "../components/SignIn.js";

const routes = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <SignIn />
      }
    ]
  }
]);

export default routes;