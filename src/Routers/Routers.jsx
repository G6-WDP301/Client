import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import { Home, Login, SignUp, Error, News, AboutUs, Gallery, ListTour, Profile, TourDetail } from '@/pages';
const Routers = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/Error" element={<Error />} />
                    <Route path="/News" element={<News />} />
                    <Route path="/AboutUs" element={<AboutUs />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/list_tour" element={<ListTour />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/tour_detail" element={<TourDetail />} />
                </Routes>
            </Router>
        </div>
    )
}

export default Routers
