import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import ViewTour from '../pages/ViewTour/ViewTour';
import ForgotPassword from '../pages/ForgotPassword/ForgotPassword'
import { Home, Login, Error, News, Gallery, ListTour, Profile, TourDetail, Admin } from '@/pages';
import Register from '../pages/SignUp/index.jsx'
import Payment from '../pages/Payment/Payment.jsx';
import '../layout/Default/Default.jsx'
import Sidebar from '../layout/Sidebar/index.jsx'
import homeAdmin from '../layout/AdminLayout/admin.jsx'
import BookingTour from '../pages/BookingTour/BookingTour.jsx'
import TableListTourAdmin from '../pages/Admin/ListTour/ListTour.jsx';
import UserManage from '../layout/Sidebar/userManage.jsx';
import TourManage from '../layout/Sidebar/tourManage.jsx';
import AboutUs from '../pages/AboutUs/index.jsx';
import NavbarAdmin from '../layout/NavbarAdminLogin/index.jsx';
import HomePartner from '../pages/Home/homePartner.jsx';
import ManageTour from '../pages/ManageTour/index.jsx';
import ManageTourEdit from '../pages/ManageTour/DetailTour.jsx';
import ManageTourDetail from '../pages/ManageTour/DetailManageTour.jsx';
import CreateTour from '../pages/ManageTour/CreateTour.jsx'

import Success from '../pages/StatusPayment/Success.jsx'
import Cancel from '../pages/StatusPayment/Cancel.jsx'

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
        path: "/booking-tour/:id",
        page: BookingTour
    },
    {
        path: "/payment/:id",
        page: Payment,
        isShowHeader: true
    },
    {
        path: "/success",
        page: Success
    },
    {
        path: "/Cancel",
        page: Cancel
    }
]

export const adminRoutes = [
    {
        path: "/",
        page: Home,
        isShowHeader: true
    },
    {
        path: "/about",
        page: AboutUs,
        isShowHeader: true
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
    {
        path: "/admin/user-manage",
        page: UserManage
    },
    {
        path: "/admin/tour-manage",
        page: TourManage
    },

];

export const RoutesPartner = [
    {
        path: "/home-partner",
        page: HomePartner,
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
        path: "/manage-tour",
        page: ManageTour
    },
    {
        path: "/manage-detail-tour/:id",
        page: ManageTourDetail
    },
    {
        path: "/manage-edit-tour/:id",
        page: ManageTourEdit
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
        path: "/booking-tour/:id",
        page: BookingTour
    },
    {
        path: "/payment",
        page: Payment,
        isShowHeader: true
    },
    {
        path: "/create-tour",
        page: CreateTour
    }
]






