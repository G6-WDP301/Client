import React, { useState, useEffect } from 'react';
import './listTour.scss';
import { Navbar, NavbarLogin, Footer } from '@/layout';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Aos from 'aos';
import { jwtDecode } from 'jwt-decode';
import NavbarPartnerLogin from '../../layout/NavbarPartnerLogin/index.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const listFilter = [
  {
    id: 1,
    name: 'Price',
    item1: 'Less than $500',
    item2: '$500 - $1000',
    item3: '$1000 - $2000',
    item4: '$2000+ ',
  },
  {
    id: 4,
    name: 'Star Rating ',
    item1: '1',
    item2: '2',
    item3: '3',
    item4: '4',
    item5: '5',
  }
];

export default function index() {
  const [isOpen, setIsOpen] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  const timeNow = new Date().toISOString();

  const toggleDropdown = (id) => {
    setIsOpen({ ...isOpen, [id]: !isOpen[id] });
  };

  const [tours, setTours] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState([]);
  const [bookingId, setBookingId] = useState([]);
  const [selectedPriceFilter, setSelectedPriceFilter] = useState(null);
  const [hasFilteredTours, setHasFilteredTours] = useState(true);
  const [booked, setBooked] = useState([]);
  const [user, setUser] = useState([])
  const [payId, setPayId] = useState([]);
  const [logPartner, setLogPartner] = useState(false);


  useEffect(() => {
    Aos.init({ duration: 2000 });
    setIsLoggedIn(Boolean(token));
    // Rest API all tours 
    axios.get('http://localhost:8080/api/tour/find-all')
      .then((response) => {
        const tourData = response.data.tours;
        setTours(tourData);
        console.log("tour data", tourData)
        setHasFilteredTours(tourData.length > 0);
      })
      .catch(error => console.log(error));

    // Rest API Booked
    axios.get('http://localhost:8080/api/booking/all')
      .then((response) => {
        const booked = response.data.tours;
        console.log("booked ne", booked);
        setBooked(booked);
      })
      .catch(error => console.log(error));
  }, []);

  // Get user id
  const token = localStorage.getItem('token');
  let userId = null;
  if (token) {
    const decodedToken = jwtDecode(token);
    userId = decodedToken.user_id;
  }

  useEffect(() => {
    console.log("Data tour here: ", tours);
  }, [tours]);

  const handleClickUser = (tourId) => {
    setSelectedUserId(tourId);
    navigate(`/tour-detail/${tourId}`);
  }

  const handleBooking = (tourId) => {
    setBookingId(tourId);
    navigate(`/booking-tour/${tourId}`);
  }

  const handlePay = (payId) => {
    setPayId(payId);
    navigate(`/payment/${payId}`);
  }

  const handlePriceFilter = (price) => {
    setSelectedPriceFilter(price);
    setIsOpen(true);
  };

  const isTourBooked = (tourId) => {
    const tour = booked.find(t => {
      return t.user_id === userId & t.tour_id === tourId
    })
    return tour ? true : false;
  }
  const getBookedTour = (tourId) => {
    const tour = booked.find(t => {
      return t.user_id === userId & t.tour_id === tourId
    })
    return tour;
  }

  // Conditional of loop
  const applyPriceFilter = (tours) => {
    if (selectedPriceFilter === null) {
      return tours.filter(tour => tour?.isAppove === "APPROVE" && new Date(tour.start_date) >= new Date(timeNow));
    } else if (selectedPriceFilter === listFilter[0].item1) {
      return tours.filter((tour) => tour?.isAppove === "APPROVE" && tour.tour_price < 500 && new Date(tour.start_date) >= new Date(timeNow));
    } else if (selectedPriceFilter === listFilter[0].item2) {
      return tours.filter((tour) => tour?.isAppove === "APPROVE" && tour.tour_price >= 500 && tour.tour_price <= 1000 && new Date(tour.start_date) >= new Date(timeNow));
    } else if (selectedPriceFilter === listFilter[0].item3) {
      return tours.filter((tour) => tour?.isAppove === "APPROVE" && tour.tour_price >= 1000 && tour.tour_price <= 2000 && new Date(tour.start_date) >= new Date(timeNow));
    } else if (selectedPriceFilter === listFilter[0].item4) {
      return tours.filter((tour) => tour?.isAppove === "APPROVE" && tour.tour_price > 2000 && new Date(tour.start_date) >= new Date(timeNow));
    } else {
      return tours.filter(tour => tour.isApprove === "APPROVE" && new Date(tour.start_date) >= new Date(timeNow));
    }
  };


  useEffect(() => {
    Aos.init({ duration: 2000 });
    const token = localStorage.getItem('token');
    setIsLoggedIn(Boolean(token));
    if (token) {
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.user_id;
      axios
        .get(`http://localhost:8080/api/user/${userId}`)
        .then((response) => {
          const userData = response.data.data;
          setUser(userData);
          const rid = decodedToken.role;
          if (rid === 'PARTNER') {
            setLogPartner(true);
          } else {
            setLogPartner(false);
          }
        })
        .catch((error) => {
          console.log('Error:', error);
        });
    }
  }, []);

  return (
    <>
      {isLoggedIn ? (
        logPartner ? (
          <NavbarPartnerLogin />
        ) : (
          <NavbarLogin />
        )
      ) : (
        <Navbar />
      )}
      <section className="w-full bg-boat bg-cover bg-bottom bg-no-repeat h-[50vh] flex justify-center bg-color2 bg-blend-multiply bg-opacity-50">
        <div className="w-full container flex justify-center items-center flex-col">
          <p className="text-white font-secondary text-3xl 2xl:text-6xl">
            List Tour
          </p>
        </div>
      </section>

      <section className="mt-[4rem] mb-[1.5rem]">
        <div className="">
          <div className="">
            <div className="flex justify-evenly items-center">
              <div className="flex flex-wrap justify-around items-center gap-[1rem]">
                <div className="text-lg font-semibold mr-3">Search Filter</div>

                {listFilter.map((list) => (
                  <div
                    key={list.id}
                    className="flex justify-around mt-[0.4rem]"
                  >
                    <div className="dropdownButton">
                      <button
                        id={`dropdownDefaultButton-${list.id}`}
                        onClick={() => toggleDropdown(list.id)}
                        className="dropdown-item text-slate-600 bg-white hover:bg-slate-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5.0 py-1.5 text-center inline-flex items-center"
                        type="button"
                      >
                        {list.name}
                        <svg
                          className="w-2.5 h-2.5 ms-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m1 1 4 4 4-4"
                          />
                        </svg>
                      </button>

                      <div
                        id={`dropdown-${list.id}`}
                        className={`${isOpen[list.id] ? 'block' : 'hidden'
                          } absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
                      >
                        <ul
                          class="py-2 text-sm text-gray-700 dark:text-gray-200"
                          aria-labelledby={`dropdownDefaultButton-${list.id}`}
                        >
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              onClick={() => handlePriceFilter(list.item1)}
                            >
                              {list.item1}
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              onClick={() => handlePriceFilter(list.item2)}
                            >
                              {list.item2}
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              onClick={() => handlePriceFilter(list.item3)}
                            >
                              {list.item3}
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              onClick={() => handlePriceFilter(list.item4)}
                            >
                              {list.item4}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="container mt-[4rem]" />

      <section className="mt-[4rem] container">
        <div className="flex flex-wrap md:justify-between gap-10 px-6 xl:px-0 py-8 lg:px-3">
          {applyPriceFilter(tours).length > 0 ? (
            applyPriceFilter(tours).map((list) => (
              <figure className="w-full md:w-[45%] xl:w-[30%] h-[450px] relative photo transition-all duration-1000">
                <div className="w-[100%] h-[100%] bottom-photo absolute bg-color7 flex flex-col justify-center px-5">
                  <p className="text-3xl text-color3 capitalize font-secondary">
                    {list.tour_name}
                  </p>
                  <p className="text-color1 mb-4" style={{ paddingTop: "10px" }}>{list.tour_price}$</p>
                  <p className="text-color6">{list.tour_description}</p>
                  <div className="flex flex-wrap my-4">
                    <div className="w-[50%] flex">
                      <i className="bi bi-clock text-color4"></i>
                      <p className="text-color6 ms-2">Time:{list.duration}h</p>
                    </div>
                    <div className="w-[50%] flex">
                      <i className="bi bi-geo-alt text-color4"></i>
                      <p className="text-color6 ms-2">{list.start_position?.location_name}</p>
                    </div>
                  </div>
                  <div className="flex gap-5 mt-6">
                    <button className="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
                      onClick={() => handleClickUser(list._id)}
                    >
                      <span className="relative px-2 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Tour Details
                      </span>
                    </button>

                    {isTourBooked(list._id) ? (
                      getBookedTour(list._id)?.isPay ? ("") : (<button className="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
                        onClick={() => handlePay(list._id)}>
                        <span className="relative px-2 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                          Pay Now
                        </span>
                      </button>)
                    ) : (
                      <button className="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
                        onClick={() => handleBooking(list._id)}>
                        <span className="relative px-2 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                          Booking Now
                        </span>
                      </button>
                    )}

                  </div>
                </div>
                <img
                  src={list.tour_img}
                  alt={list.end_position.location_name}
                  className="w-[100%] h-[100%] object-cover brightness-75 absolute"
                />
                <p className="absolute uppercase text-white bg-color3 px-4 py-1 right-1 top-12 rotate-[-90deg] ">
                  {list.start_position?.location_name}
                </p>
                <figcaption className="absolute text-white bottom-8 right-10 fig">
                  <p className="capitalize font-secondary text-3xl" style={{ paddingLeft: "20px", paddingBottom: "90px" }}>
                    {list.tour_name}
                  </p>
                  <p className="text-right">{list.tour_price} $ / person</p>
                </figcaption>
              </figure>
            ))
          ) : (
            <h1 style={{ color: "gray", fontSize: "25px", fontStyle: "italic" }}>No tour has found ~</h1>
          )}

        </div>
      </section >
      <div class="flex items-center justify-center py-10 lg:px-0 sm:px-6 px-4">
        <div class="lg:w-3/5 w-full  flex items-center justify-between border-t border-gray-200">
          <div class="flex items-center pt-3 text-gray-600 hover:text-orange-400 cursor-pointer">
            <svg
              width="14"
              height="8"
              viewBox="0 0 14 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.1665 4H12.8332"
                stroke="currentColor"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1.1665 4L4.49984 7.33333"
                stroke="currentColor"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1.1665 4.00002L4.49984 0.666687"
                stroke="currentColor"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p class="text-sm ml-3 font-medium leading-none">Previous</p>
          </div>
          <div class="sm:flex hidden">
            <p class="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">
              1
            </p>
            <p class="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">
              2
            </p>
            <p class="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">
              3
            </p>
            <p class="text-sm font-medium leading-none cursor-pointer text-indigo-700 border-t border-indigo-400 pt-3 mr-4 px-2">
              4
            </p>
            <p class="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">
              5
            </p>
            <p class="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">
              6
            </p>
            <p class="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">
              7
            </p>
            <p class="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">
              8
            </p>
          </div>
          <div class="flex items-center pt-3 text-gray-600 hover:text-orange-400 cursor-pointer">
            <p class="text-sm font-medium leading-none mr-3">Next</p>
            <svg
              width="14"
              height="8"
              viewBox="0 0 14 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.1665 4H12.8332"
                stroke="currentColor"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.5 7.33333L12.8333 4"
                stroke="currentColor"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.5 0.666687L12.8333 4.00002"
                stroke="currentColor"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div >
      </div>

      <div className="text-gray-400 text-sm flex justify-center mb-[6rem]">
        <span className="mr-1 font-bold">1</span> -
        <span className="mr-1 font-bold">20</span> of
        <span className="mr-1 ml-1 font-bold">300+</span> properties found
      </div>

      <Footer />
    </>
  );
}