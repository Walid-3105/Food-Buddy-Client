import { createBrowserRouter } from "react-router-dom";
import Home from "../HomePage/Home";
import Register from "../HomePage/Login & Register/Register";
import Login from "../HomePage/Login & Register/Login";
import HomePage from "../HomePage/HomePage";
import AddFood from "../Components/AddFood";
import AvailableFoods from "../Pages/AvailableFoods";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: "Error",
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
    ],
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/addFood",
    element: <AddFood></AddFood>,
  },
  {
    path: "/availableFoods",
    element: <AvailableFoods></AvailableFoods>,
  },
]);

export default router;
