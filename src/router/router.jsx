import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn";
import JobDetails from "../Pages/JobDetails";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <h2 className="text-4xl font-bold text-center mt-40">NO Route Found</h2>,
        children: [
            {
                path:"/",
                element: <Home></Home>
            },
            {
                path: "register",
                element: <Register></Register>
            },
            {
                path: "signin",
                element: <SignIn></SignIn>
            },
            {
                path:"/jobs/:id",
                element:<JobDetails></JobDetails>
            }
        ]
    },
]);



export default router;