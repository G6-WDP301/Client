import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import { Home, Login, SignUp, Error, News, AboutUs } from '@/pages';
import ViewTour from '../pages/ViewTour/ViewTour';
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
                    <Route path="/list-tour/viewtour" element={<ViewTour />} />
                </Routes>
            </Router>
        </div>
    )
}

export default Routers
