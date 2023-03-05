import { createBrowserRouter } from "react-router-dom";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import Campaigns from "./campaigns/Index";
import Growth from "./growth/Index";

const router  = createBrowserRouter([

 {
  path: "/campaigns",
  element: <Campaigns />
 },
 {
  path: "/growth",
  element: <Growth />
 },
 {
  path: "/",
  element: <Login />
 },
 {
  path: "/signup",
  element: <Signup />
 },
])

export default router;
