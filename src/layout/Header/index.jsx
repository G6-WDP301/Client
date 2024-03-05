import './Header.scss'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Header = () => {

  const [tours, setTours] = useState([]);
  const [startPosition, setStartPosition] = useState('');
  const [endPosition, setEndPosition] = useState('');
  const [searchDate, setSearchDate] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/api/tour/find-all')
      .then((response) => {
        const tourData = response.data.tours;
        setTours(tourData);
        console.log("Data tour ne: ", tourData);
      })
      .catch(error => console.log(error));
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/tour/get-list-search-tour?page=1&pageSize=10', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(searchParams),
      });

      if (response.ok) {
        const responseData = await response.data;
        console.log('Search successful:', responseData);
        toast.success('Please wait few minutes...')
        // navigate('/');
      } else {
        console.error('Search failed:', response.status);
        const errorData = await response.error;
        console.error('Error Data:', errorData);
        toast.error(errorData.error);
      } x
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const searchParams = {
    startPosition,
    endPosition,
    searchDate,
  };


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
            <a href="/list-tour">Explore Now</a>
          </button>

        </div>

        <div className="homeCard grid">
          <div data-aos="fade-right" data-aos-duration="2000" className="locationDiv">
            <label htmlFor="location">Start place</label>
            <select value={startPosition} onChange={(e) => setStartPosition(e.target.value)}>
              <option value="">Choose Start Position</option>
              {tours.map((tour) => (
                <option value={tour._id} key={tour._id}>
                  {tour?.start_position?.location_name}
                </option>
              ))}
            </select>
          </div>
          <div data-aos="fade-right" data-aos-duration="2500" className="distDiv">
            <label htmlFor="location">End place</label>
            <select value={endPosition} onChange={(e) => setEndPosition(e.target.value)}>
              <option value="">Choose End Position</option>
              {tours.map((tour) => (
                <option value={tour._id} key={tour._id}>
                  {tour?.start_position?.location_name}
                </option>
              ))}
            </select>
          </div>
          <div data-aos="fade-right" data-aos-duration="3000" className="priceDiv">
            <label htmlFor="price">Date</label>
            <input
              type="date"
              value={searchDate}
              onChange={(e) => setSearchDate(e.target.value)}
              placeholder="Search Date here"
            />
          </div>
          <button data-aos="fade-left" data-aos-duration="2000" className="btn" onClick={handleSubmit}>
            Search
          </button>
        </div>
      </div>
    </section>
  )
}

export default Header
