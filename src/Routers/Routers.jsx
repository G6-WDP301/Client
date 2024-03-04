import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import ViewTour from '../pages/ViewTour/ViewTour';
import ForgotPassword from '../pages/ForgotPassword/ForgotPassword'
import { Home, Login, Error, News, AboutUs, Gallery, ListTour, Profile, TourDetail, Admin } from '@/pages';
import Register from '../pages/SignUp/index.jsx'
import Payment from '../pages/Payment/Payment.jsx';
import '../layout/Default/Default.jsx'
import Sidebar from '../layout/Sidebar/index.jsx'
import homeAdmin from '../layout/AdminLayout/admin.jsx'
import BookingTour from '../pages/BookingTour/BookingTour.jsx'
import TableListTourAdmin from '../pages/Admin/ListTour/ListTour.jsx';

export const routes = [
    {
        path: "/",
        page: Home,
        isShowHeader: true
    },
    {
        path: "/login",
        page: Login,
    },
    {
        path: "/register",
        page: Register,
    },
    {
        path: "/about",
        page: AboutUs,
        isShowHeader: true
    },
    {
        path: "*",
        page: Error
    },
    {
        path: "/news",
        page: News
    },
    {
        path: "/gallery",
        page: Gallery
    },
    {
        path: "/list-tour",
        page: ListTour
    },
    {
        path: "/profile",
        page: Profile
    },
    {
        path: "/tour-detail/:id",
        page: TourDetail
    },
    {
        path: "/admin",
        page: Admin
    },
    {
        path: "/view-tour",
        page: ViewTour
    },
    {
        path: "/forgot-password",
        page: ForgotPassword
    },
    {
        path: "/sideBar",
        page: Sidebar
    },
    {
        path: "/booking-tour/:id",
        page: BookingTour
    },
    {
        path: "/payment",
        page: Payment,
        isShowHeader: true
    },
    {
        path: "/admin/list-tour",
        page: TableListTourAdmin
    },
]

export const adminRoutes = [
    {
        path: '/home-admin',
        page: homeAdmin,
    },
    {
        path: "*",
        page: Error
    },
    {
        path: "/dashboard",
        page: Sidebar
    },
    // {
    //     path: "/user-admin",
    //     page: Error
    // }

];






