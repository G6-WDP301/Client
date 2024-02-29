import React, { useEffect, useState } from 'react';
import { Navbar, Footer, NavbarLogin } from "@/layout";
import './Home.scss';
import Popular from "../Popular/Popular.jsx";
import Offers from "../Offers/Offers.jsx";
import About from "../About/About.jsx";
import Blog from "../Blog/Blog.jsx";
import Header from "../../layout/Header/index.jsx";
import Aos from 'aos';
import 'aos/dist/aos.css';
import PopularTour from '../Popular/PopularTour.jsx';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [user, setUser] = useState({});

  useEffect(() => {
    Aos.init({ duration: 2000 });
    const token = localStorage.getItem('token');
    setIsLoggedIn(Boolean(token));
    if (token) {
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.user_id;
      // Tiếp tục xử lý hoặc gọi API với userId đã lấy được
      axios.get(`http://localhost:8080/api/user/${userId}`)
        .then((response) => {
          const userData = response.data.data;
          console.log('User data:', userData);
          setUser(userData);
          console.log(user);
        })
        .catch((error) => {
          console.log('Error:', error);
        });
    }
  }, []);

  if(!user) {
    return (
      <div> Loading...
      </div>
    );
  }

  return (
    <>
      {isLoggedIn ? <NavbarLogin /> : <Navbar />}
      <Header />
      <Popular />
      <PopularTour />
      <Offers />
      <About />
      <Blog />
      <Footer />
    </>
  );
};

export default Home;
