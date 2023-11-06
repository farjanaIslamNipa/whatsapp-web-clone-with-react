import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage.js";

const routes = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <LandingPage />
      }
    ]
  }
]);

export default routes;