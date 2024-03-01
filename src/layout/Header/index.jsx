import './Header.scss'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Header = () => {

  useEffect(() => {
    axios.get('http://localhost:8080/api/tour/find-all')
      .then((response) => {
        const tourData = response.data.tours;
        setTours(tourData);
        console.log(tourData[0].tour_name);
      })
      .catch(error => console.log(error));
  }, []);


  return (
    <section className="home">
      <div className="secContainer container">

        <div className="homeText">
          <h1 data-aos="fade-up" className="title font-bold text-2xl">
            Plan Your Trip With Travel Dot
          </h1>

          <p data-aos="fade-up" data-aos-duration="2500" className="subTitle ">
            Travel to your favourite city with respectful of the enviroment!
          </p>

          <button data-aos="fade-up" data-aos-duration="3000" className="btn">
            <a href="#">Explore Now</a>
          </button>

        </div>

        <div className="homeCard grid">

          <div data-aos="fade-right" data-aos-duration="2000" className="locationDiv">
            <label htmlFor="location">Start place</label>
            <input type="text" placeholder="Choose Start Position" />
          </div>

          <div data-aos="fade-right" data-aos-duration="2500" className="distDiv">
            <label htmlFor="location">End place</label>
            <input type="text" placeholder="Choose End Position" />
          </div>

          <div data-aos="fade-right" data-aos-duration="3000" className="priceDiv">
            <label htmlFor="price">Date</label>
            <input type="Date" placeholder="Search Date here" />
          </div>

          <button data-aos="fade-left" data-aos-duration="2000" className="btn">
            Search
          </button>

        </div>

      </div>
    </section>
  )
}

export default Header
