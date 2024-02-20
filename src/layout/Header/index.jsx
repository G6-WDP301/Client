import './Header.scss'
import React from 'react'

const Header = () => {
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
              <input type="text" placeholder="Choose Start Position"/>
            </div>
            
            <div data-aos="fade-right" data-aos-duration="2500" className="distDiv">
              <label htmlFor="location">End place</label>
              <input type="text" placeholder="Choose End Position"/>
            </div>

            <div data-aos="fade-right" data-aos-duration="3000" className="priceDiv">
              <label htmlFor="price">Date</label>
              <input type="Date" placeholder="Search Date here"/>
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
