import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import ViewTour from '../pages/ViewTour/ViewTour';
import ForgotPassword from '../pages/ForgotPassword/ForgotPassword'
import { Home, Login, Error, News, AboutUs, Gallery, ListTour, Profile, TourDetail, Admin } from '@/pages';
import Register from '../pages/SignUp/index.jsx'
import '../layout/Default/Default.jsx'

// const Routers = () => {
//     return (
//         <div>
//             <Router>
//                 <Routes>
//                     <Route path="/" element={<Home />} />
//                     <Route path="/login" element={<Login />} />
//                     <Route path="/sign-up" element={<SignUp />} />
//                     <Route path="/Error" element={<Error />} />
//                     <Route path="/News" element={<News />} />
//                     <Route path="/AboutUs" element={<AboutUs />} />
//                     <Route path="/forgot" element={<ForgotPassword />} />
//                     <Route path="/list-tour/viewtour" element={<ViewTour />} />
//                     <Route path="/gallery" element={<Gallery />} />
//                     <Route path="/list_tour" element={<ListTour />} />
//                     <Route path="/profile" element={<Profile />} />
//                     <Route path="/tour_detail" element={<TourDetail />} />
//                     <Route path="/Admin" element={<Admin />} />
//                 </Routes>
//             </Router>
//         </div>
//     )
// }

// export default Routers

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
        path: "/listTour",
        page: ListTour
    }, 
    {
        path: "/profile",
        page: Profile
    }, 
    {
        path: "/tourDetail",
        page: TourDetail
    }, 
    {
        path: "/admin",
        page: Admin
    },
    {
        path: "/viewTour",
        page: ViewTour
    },
    {
        path: "/forgotPassword",
        page: ForgotPassword
    },
    
]
