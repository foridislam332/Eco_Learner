import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Instructors from "../pages/Instructors";
import Classes from "../pages/Classes";
import InstructorClasses from "../pages/InstructorClasses";
import Dashboard from "../layouts/Dashboard";
import SelectedClasses from "../pages/Dashboard/SelectedClasses";
import PrivateRoute from "./PrivateRoute";
import EnrolledClasses from "../pages/Dashboard/EnrolledClasses";
import AddClass from "../pages/Dashboard/AddClass";
import MyClasses from "../pages/Dashboard/MyClasses";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'instructors',
                element: <Instructors />
            },
            {
                path: 'instructorClasses/:instructor',
                element: <InstructorClasses />,
                loader: ({ params }) => fetch(`http://localhost:5000/instructors/${params.instructor}`)
            },
            {
                path: 'classes',
                element: <Classes />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'signUp',
                element: <SignUp />
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'studentHome',
                element: <SelectedClasses></SelectedClasses>
            },
            {
                path: 'enrolledClasses',
                element: <EnrolledClasses></EnrolledClasses>
            },
            {
                path: 'addClass',
                element: <AddClass></AddClass>
            },
            {
                path: 'myClasses',
                element: <MyClasses></MyClasses>
            }
        ]
    }
]);

export default routes;