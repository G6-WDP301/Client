import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import ViewTour from '../pages/ViewTour/ViewTour';
import ForgotPassword from '../pages/ForgotPassword/ForgotPassword'
import { Home, Login, Error, News, AboutUs, Gallery, ListTour, Profile, TourDetail, Admin } from '@/pages';
import Register from '../pages/SignUp/index.jsx'
import '../layout/Default/Default.jsx'
import BookingTour from '../pages/BookingTour/BookingTour.jsx';
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
        path: "/tour-detail",
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
        path: "/booking-tour",
        page: BookingTour
    },
    {
        path: "/admin/list-tour",
        page: TableListTourAdmin
    },
    
]
