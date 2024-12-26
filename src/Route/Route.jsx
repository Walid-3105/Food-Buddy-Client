import { createBrowserRouter } from "react-router-dom";
import Home from "../HomePage/Home";
import Register from "../HomePage/Login & Register/Register";
import Login from "../HomePage/Login & Register/Login";
import HomePage from "../HomePage/HomePage";
import AddFood from "../Components/AddFood";
import AvailableFoods from "../Pages/AvailableFoods";
import FoodDetails from "../Pages/FoodDetails";
import ManageMyFood from "../Pages/ManageMyFood";
import MyFoodRequest from "../Pages/MyFoodRequest";
import PrivateRoute from "./PrivateRoute";
import Error from "../Components/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Error></Error>,
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
    element: (
      <PrivateRoute>
        <AddFood></AddFood>
      </PrivateRoute>
    ),
  },
  {
    path: "/availableFoods",
    element: <AvailableFoods></AvailableFoods>,
  },
  {
    path: "/food/:id",
    element: (
      <PrivateRoute>
        <FoodDetails></FoodDetails>
      </PrivateRoute>
    ),
    loader: ({ params }) =>
      fetch(
        `https://assignment-11-server-beta-bay.vercel.app/food/${params.id}`
      ),
  },
  {
    path: "/manageMyFood",
    element: (
      <PrivateRoute>
        <ManageMyFood></ManageMyFood>
      </PrivateRoute>
    ),
  },
  {
    path: "/myFoodRequest",
    element: (
      <PrivateRoute>
        <MyFoodRequest></MyFoodRequest>
      </PrivateRoute>
    ),
  },
]);

export default router;
