import Main from "@/pages/Main";
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import Auth from "@/pages/Auth";
import PrivateRoute from "@/router/PrivateRoute";
import Layout from "@/pages/Main/Layout";
import Admin from "@/pages/Admin";
import Transaction from "@/pages/Transaction";
import UserManage from "@/pages/Admin/UserManage";
import ApprovalManage from "@/pages/Admin/ApprovalManage";
import TransactionList from "@/pages/Transaction/TransactionList";

const CustomRouterProvider = () => {

     const browserRouter = createBrowserRouter([
        {
            path: '',
            element: <Main/>,
            children: [
                {
                    path: '/',
                    element: <PrivateRoute element={<Layout />} />,
                    children: [
                        {
                            path: 'admin',
                            element: <PrivateRoute element={<Admin />} />,
                            children: [
                                {
                                    path: 'userManager',
                                    element: <PrivateRoute element={<UserManage />} />,
                                },
                                {
                                    path: 'approve',
                                    element: <PrivateRoute element={<ApprovalManage />} />,
                                },
                            ]
                        },
                        {
                            path: 'transaction',
                            element: <PrivateRoute element={<Transaction />} />,
                            children: [
                                {
                                    path: 'transactionList',
                                    element: <PrivateRoute element={<TransactionList />} />,
                                },
                            ]
                        }


                    ]
                },
                {
                    path: 'auth',
                    element: <Auth/>,
                    children: [
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