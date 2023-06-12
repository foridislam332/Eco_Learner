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
import UpdateMyClass from "../pages/Dashboard/UpdateMyClass";
import ManageClasses from "../pages/Dashboard/ManageClasses";
import ManageUsers from "../pages/Dashboard/ManageUsers";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/Payment/PaymentHistory";
import PageNotFound from "../pages/PageNotFound";

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
                loader: ({ params }) => fetch(`https://eco-learner-server.vercel.app/instructors/${params.instructor}`)
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
                path: 'payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://eco-learner-server.vercel.app/selectedClasses/${params.id}`)
            },
            {
                path: 'paymentHistory',
                element: <PaymentHistory></PaymentHistory>
            },
            {
                path: 'myClasses',
                element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute>
            },
            {
                path: 'addClass',
                element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
            },
            {
                path: 'updateClass/:id',
                element: <InstructorRoute><UpdateMyClass></UpdateMyClass></InstructorRoute>,
                loader: ({ params }) => fetch(`https://eco-learner-server.vercel.app/classes/${params.id}`)
            },
            {
                path: 'manageClasses',
                element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
            },
            {
                path: 'manageUsers',
                element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
            }
        ]
    },
    {
        path: '*',
        element: <PageNotFound />
    }
]);

export default routes;