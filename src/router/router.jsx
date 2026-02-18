import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn";
import JobDetails from "../Pages/JobDetails";
import PrivetRoute from "./PrivetRoute";
import JobApply from "../Pages/JobApply";
import MyApplication from "../Pages/MyApplication";
import AddJob from "../Pages/addJob";

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
                element:<PrivetRoute><JobDetails></JobDetails></PrivetRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`),
                hydrateFallbackElement: <p>Data is Loading</p>
            },
            {
                path: "/jobApply/:id",
                element:<PrivetRoute><JobApply></JobApply></PrivetRoute>
            },
            {
                path: 'job-application',
                element: <PrivetRoute><MyApplication></MyApplication></PrivetRoute>
            },
            {
                path: '/addjob',
                element: <PrivetRoute><AddJob></AddJob></PrivetRoute>
            }
        ]
    },
]);



export default router;