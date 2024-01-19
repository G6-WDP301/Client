import React, {useEffect} from 'react'
import { Navbar, Footer  } from "@/layout";
import { useNavigate } from "react-router-dom";
import './Home.scss'
import Popular from "../Popular/Popular.jsx";
import Offers from "../Offers/Offers.jsx";
import About from "../About/About.jsx";
import Blog from "../Blog/Blog.jsx";
import Header from "../../layout/Header/index.jsx";

import Aos from 'aos';
import 'aos/dist/aos.css'
import PopularTour from '../Popular/PopularTour.jsx';


const Home = () => {
  const navigate = useNavigate();

  useEffect(()=> {
    Aos.init({duration:2000})
  }, [])

  return (
    < >
      <Navbar/>
      <Header/>
      <Popular/>
      <PopularTour/>
      <Offers/>
      <About/>
      <Blog/>
      <Footer/>

      {/* <Button onClick={() => navigate("/about")} /> */}

    </>
  )
}

export default Home
