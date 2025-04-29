import Main from "@/pages/Main";
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import Auth from "@/pages/Auth";
import PrivateRoute from "@/router/PrivateRoute";
import Layout from "@/pages/Main/Layout";

const CustomRouterProvider = () => {

    const browserRouter = createBrowserRouter([
        {
            path: '',
            element: <Main/>,
            children: [
                {
                    path: 'auth',
                    element: <Auth/>,
                    children: [
                        {
                            path: '/',
                            element: <PrivateRoute element={<Layout />} />,
                            children: [

                            ]
                        },

                        {
                            index: true,
                            element: <Navigate to={'login'}/>,
                        },
                    ]
                }
            ]
        }
        ]);


    return <RouterProvider router={browserRouter} future={{ v7_startTransition: true }} />;
}

export default CustomRouterProvider