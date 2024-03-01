import React, { useState, useEffect } from 'react';
import './listTour.scss';
import { Navbar, Footer } from '@/layout';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import maldives1 from '../../images/maldives1.jpg';
import Roma from '../../images/2.jpg';
import france1 from '../../images/france1.jpg';
import greece1 from '../../images/greece1.jpg';
import canada1 from '../../images/canada1.jpg';
import Dubai from '../../images/44-1.jpg';

const listFilter = [
  {
    id: 1,
    name: 'Price',
    item1: 'Less than $5000c',
    item2: '$500 - $1000',
    item3: '$1000 - $2000',
    item4: '$2000 + ',
  },
  {
    id: 2,
    name: 'Amenities',
    item1: 'Swimming pool',
    item2: 'Laundry',
    item3: 'Outdoor spaces',
    item4: 'Security',
  },
  {
    id: 3,
    name: 'Style',
    item1: 'Modern',
    item2: 'Minimalist',
    item3: 'Contemporary',
    item4: 'Bohemian',
  },
  {
    id: 4,
    name: 'Star Rating ',
    item1: '1',
    item2: '2',
    item3: '3',
    item4: '4',
    item5: '5',
  },
];

const listTour = [
  {
    id: 1,
    nameTour: 'Maldives tour',
    des: 'Travel non lorem ac erat susce bibendum nulla facilisi. Sedeuter nunc voluat miss conse viventa amet vestibulum.',
    day: '12 Days',
    nameCountry: 'Maldives',
    hour: '12+',
    superb: '9.8 Superb',
    img: maldives1,
    price: '$2500 / per persons',
  },
  {
    id: 2,
    nameTour: 'Roma',
    des: 'Travel non lorem ac erat susce bibendum nulla facilisi. Sedeuter nunc voluat miss conse viventa amet vestibulum.',
    day: '6 Days',
    nameCountry: 'Italy',
    hour: '10+',
    superb: '9.5 Superb',
    img: Roma,
    price: '$1,300 / per persons',
  },
  {
    id: 3,
    nameTour: 'France',
    des: 'Travel non lorem ac erat susce bibendum nulla facilisi. Sedeuter nunc voluat miss conse viventa amet vestibulum.',
    day: '10 Days',
    nameCountry: 'France',
    hour: '6+',
    superb: '9.5 Superb',
    img: france1,
    price: '$400 / per persons',
  },
  {
    id: 4,
    nameTour: 'Greece tour',
    des: 'Travel non lorem ac erat susce bibendum nulla facilisi. Sedeuter nunc voluat miss conse viventa amet vestibulum.',
    day: '10 Days',
    nameCountry: 'Greece',
    hour: '12+',
    superb: '9.3 Superb',
    img: greece1,
    price: '$500 / per persons',
  },
  {
    id: 5,
    nameTour: 'Canada tour',
    des: 'Travel non lorem ac erat susce bibendum nulla facilisi. Sedeuter nunc voluat miss conse viventa amet vestibulum.',
    day: '7 Days',
    nameCountry: 'Canada',
    hour: '10+',
    superb: '9.3 Superb',
    img: canada1,
    price: '$300 / per persons',
  },
  {
    id: 6,
    nameTour: 'Dubai tour',
    des: 'Travel non lorem ac erat susce bibendum nulla facilisi. Sedeuter nunc voluat miss conse viventa amet vestibulum.',
    day: '7 Days',
    nameCountry: 'Dubai',
    hour: '10+',
    superb: '9.8 Superb',
    img: Dubai,
    price: '$200 / per persons',
  },
  {
    id: 7,
    nameTour: 'Dubai tour',
    des: 'Travel non lorem ac erat susce bibendum nulla facilisi. Sedeuter nunc voluat miss conse viventa amet vestibulum.',
    day: '7 Days',
    nameCountry: 'Dubai',
    hour: '10+',
    superb: '9.8 Superb',
    img: Dubai,
    price: '$200 / per persons',
  },
  {
    id: 8,
    nameTour: 'Dubai tour',
    des: 'Travel non lorem ac erat susce bibendum nulla facilisi. Sedeuter nunc voluat miss conse viventa amet vestibulum.',
    day: '7 Days',
    nameCountry: 'Dubai',
    hour: '10+',
    superb: '9.8 Superb',
    img: Dubai,
    price: '$200 / per persons',
  },
  {
    id: 9,
    nameTour: 'Dubai tour',
    des: 'Travel non lorem ac erat susce bibendum nulla facilisi. Sedeuter nunc voluat miss conse viventa amet vestibulum.',
    day: '7 Days',
    nameCountry: 'Dubai',
    hour: '10+',
    superb: '9.8 Superb',
    img: Dubai,
    price: '$200 / per persons',
  },
  {
    id: 10,
    nameTour: 'Dubai tour',
    des: 'Travel non lorem ac erat susce bibendum nulla facilisi. Sedeuter nunc voluat miss conse viventa amet vestibulum.',
    day: '7 Days',
    nameCountry: 'Dubai',
    hour: '10+',
    superb: '9.8 Superb',
    img: Dubai,
    price: '$200 / per persons',
  },
  {
    id: 11,
    nameTour: 'Dubai tour',
    des: 'Travel non lorem ac erat susce bibendum nulla facilisi. Sedeuter nunc voluat miss conse viventa amet vestibulum.',
    day: '7 Days',
    nameCountry: 'Dubai',
    hour: '10+',
    superb: '9.8 Superb',
    img: Dubai,
    price: '$200 / per persons',
  },
  {
    id: 12,
    nameTour: 'Dubai tour',
    des: 'Travel non lorem ac erat susce bibendum nulla facilisi. Sedeuter nunc voluat miss conse viventa amet vestibulum.',
    day: '7 Days',
    nameCountry: 'Dubai',
    hour: '10+',
    superb: '9.8 Superb',
    img: Dubai,
    price: '$200 / per persons',
  },
];

export default function index() {
  const [isOpen, setIsOpen] = useState([]);

  const navigate = useNavigate();

  const toggleDropdown = (id) => {
    setIsOpen({ ...isOpen, [id]: !isOpen[id] });
  };

  const [tours, setTours] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState([]);
  const [bookingId, setBookingId] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/tour/find-all')
      .then((response) => {
        const tourData = response.data.tours;
        setTours(tourData);
        console.log(tourData[0].tour_name);
      })
      .catch(error => console.log(error));
  }, []);

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

  return (
    <>
      <Navbar />
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
                <div className="text-lg font-semibold mr-3">Filter</div>

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
                            >
                              {list.item1}
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              {list.item2}
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              {list.item3}
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
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

              <div className="">
                <form className="flex items-center max-w-sm mx-auto">
                  <label for="simple-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 20"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="simple-search"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search tour name in here..."
                      required
                      style={{ width: '20rem' }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                    <span className="sr-only">Search</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="container mt-[4rem]" />

      <section className="mt-[4rem] container">
        <div className="flex flex-wrap md:justify-between gap-10 px-6 xl:px-0 py-8 lg:px-3">
          {tours.map((list) => (
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
                    <p className="text-color6 ms-2">{list.end_position.location_name}</p>
                  </div>
                  {/* <div className="w-[50%] flex">
                    <i className="bi bi-person text-color4"></i>
                    <p className="text-color6 ms-2">{list.duration}</p>
                  </div> */}
                  {/* <div className="w-[50%] flex">
                    <i className="bi bi-emoji-smile text-color4"></i>
                    <p className="text-color6 ms-2">{list.superb}</p>
                  </div> */}
                </div>
                <div className="flex gap-5 mt-6">
                  <button className="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
                    onClick={() => handleClickUser(list._id)}
                  >
                    <span className="relative px-2 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Tour Details
                    </span>
                  </button>

                  <button className="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
                    onClick={() => handleBooking(list._id)}>
                    <span className="relative px-2 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Booking Now
                    </span>
                  </button>

                </div>
              </div>
              <img
                src={list.tour_img}
                alt={list.end_position.location_name}
                className="w-[100%] h-[100%] object-cover brightness-75 absolute"
              />
              <p className="absolute uppercase text-white bg-color3 px-4 py-1 right-1 top-12 rotate-[-90deg] ">
                {list.end_position.location_name}
              </p>
              <figcaption className="absolute text-white bottom-8 right-10 fig">
                <p className="capitalize font-secondary text-3xl" style={{ paddingLeft: "20px", paddingBottom: "90px" }}>
                  {list.tour_name}
                </p>
                <p className="text-right">{list.tour_price} $ / person</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

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
        </div>
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





















// import React, { useState, useEffect } from 'react';
// import './listTour.scss';
// import { Navbar, Footer } from '@/layout';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// import maldives1 from '../../images/maldives1.jpg';
// import Roma from '../../images/2.jpg';
// import france1 from '../../images/france1.jpg';
// import greece1 from '../../images/greece1.jpg';
// import canada1 from '../../images/canada1.jpg';
// import Dubai from '../../images/44-1.jpg';

// const listTour = [
//   {
//     id: 1,
//     nameTour: 'Maldives tour',
//     des: 'Travel non lorem ac erat susce bibendum nulla facilisi. Sedeuter nunc voluat miss conse viventa amet vestibulum.',
//     day: '12 Days',
//     nameCountry: 'Hòa Lạc',
//     hour: '12+',
//     superb: '9.8 Superb',
//     img: maldives1,
//     price: '$150 / per persons',
//   },
//   {
//     id: 2,
//     nameTour: 'Roma',
//     des: 'Travel non lorem ac erat susce bibendum nulla facilisi. Sedeuter nunc voluat miss conse viventa amet vestibulum.',
//     day: '6 Days',
//     nameCountry: 'Italy',
//     hour: '10+',
//     superb: '9.5 Superb',
//     img: Roma,
//     price: '$1,300 / per persons',
//   },
//   {
//     id: 3,
//     nameTour: 'France',
//     des: 'Travel non lorem ac erat susce bibendum nulla facilisi. Sedeuter nunc voluat miss conse viventa amet vestibulum.',
//     day: '10 Days',
//     nameCountry: 'France',
//     hour: '6+',
//     superb: '9.5 Superb',
//     img: france1,
//     price: '$400 / per persons',
//   },
//   {
//     id: 4,
//     nameTour: 'Greece tour',
//     des: 'Travel non lorem ac erat susce bibendum nulla facilisi. Sedeuter nunc voluat miss conse viventa amet vestibulum.',
//     day: '10 Days',
//     nameCountry: 'Greece',
//     hour: '12+',
//     superb: '9.3 Superb',
//     img: greece1,
//     price: '$500 / per persons',
//   },
//   {
//     id: 5,
//     nameTour: 'Canada tour',
//     des: 'Travel non lorem ac erat susce bibendum nulla facilisi. Sedeuter nunc voluat miss conse viventa amet vestibulum.',
//     day: '7 Days',
//     nameCountry: 'Canada',
//     hour: '10+',
//     superb: '9.3 Superb',
//     img: canada1,
//     price: '$300 / per persons',
//   },
//   {
//     id: 6,
//     nameTour: 'Dubai tour',
//     des: 'Travel non lorem ac erat susce bibendum nulla facilisi. Sedeuter nunc voluat miss conse viventa amet vestibulum.',
//     day: '7 Days',
//     nameCountry: 'Dubai',
//     hour: '10+',
//     superb: '9.8 Superb',
//     img: Dubai,
//     price: '$200 / per persons',
//   },
//   {
//     id: 7,
//     nameTour: 'Dubai tour',
//     des: 'Travel non lorem ac erat susce bibendum nulla facilisi. Sedeuter nunc voluat miss conse viventa amet vestibulum.',
//     day: '7 Days',
//     nameCountry: 'Dubai',
//     hour: '10+',
//     superb: '9.8 Superb',
//     img: Dubai,
//     price: '$200 / per persons',
//   },
//   {
//     id: 8,
//     nameTour: 'Dubai tour',
//     des: 'Travel non lorem ac erat susce bibendum nulla facilisi. Sedeuter nunc voluat miss conse viventa amet vestibulum.',
//     day: '7 Days',
//     nameCountry: 'Dubai',
//     hour: '10+',
//     superb: '9.8 Superb',
//     img: Dubai,
//     price: '$200 / per persons',
//   },
//   {
//     id: 9,
//     nameTour: 'Dubai tour',
//     des: 'Travel non lorem ac erat susce bibendum nulla facilisi. Sedeuter nunc voluat miss conse viventa amet vestibulum.',
//     day: '7 Days',
//     nameCountry: 'Dubai',
//     hour: '10+',
//     superb: '9.8 Superb',
//     img: Dubai,
//     price: '$200 / per persons',
//   },
//   {
//     id: 10,
//     nameTour: 'Dubai tour',
//     des: 'Travel non lorem ac erat susce bibendum nulla facilisi. Sedeuter nunc voluat miss conse viventa amet vestibulum.',
//     day: '7 Days',
//     nameCountry: 'Dubai',
//     hour: '10+',
//     superb: '9.8 Superb',
//     img: Dubai,
//     price: '$200 / per persons',
//   },
//   {
//     id: 11,
//     nameTour: 'Dubai tour',
//     des: 'Travel non lorem ac erat susce bibendum nulla facilisi. Sedeuter nunc voluat miss conse viventa amet vestibulum.',
//     day: '7 Days',
//     nameCountry: 'Dubai',
//     hour: '10+',
//     superb: '9.8 Superb',
//     img: Dubai,
//     price: '$200 / per persons',
//   },
//   {
//     id: 12,
//     nameTour: 'Dubai tour',
//     des: 'Travel non lorem ac erat susce bibendum nulla facilisi. Sedeuter nunc voluat miss conse viventa amet vestibulum.',
//     day: '7 Days',
//     nameCountry: 'Dubai',
//     hour: '10+',
//     superb: '9.8 Superb',
//     img: Dubai,
//     price: '$200 / per persons',
//   },
// ];

// export default function index() {
//   const [isOpen, setIsOpen] = useState([]);

//   const navigate = useNavigate();

//   const toggleDropdown = (id) => {
//     setIsOpen({ ...isOpen, [id]: !isOpen[id] });
//   };

//   const [tour, setTour] = useState({})

//   useEffect(() => {
//     axios.get('http://localhost:8080/api/tour/find-all')
//       .then((response) => {
//         const tourData = response.data.tours;
//         setTour(tourData);
//         console.log(tourData[0].tour_name);
//       })
//       .catch(error => console.log(error));
//   }, []);

//   useEffect(() => {
//     console.log("Data tour here: ", tour);
//   }, [tour]);



//   return (
//     <>
//       <section className="mt-[4rem] container">
//         <div className="flex flex-wrap md:justify-between gap-10 px-6 xl:px-0 py-8 lg:px-3">
//           {listTour.map((list) => (
//             <figure className="w-full md:w-[45%] xl:w-[30%] h-[450px] relative photo transition-all duration-1000">
//               <div className="w-[100%] h-[100%] bottom-photo absolute bg-color7 flex flex-col justify-center px-5">
//                 <p className="text-3xl text-color3 capitalize font-secondary">
//                   {tour[0]?.tour_name}
//                 </p>
//                 <p className="text-color1 mb-4">{tour[0]?.tour_price}</p>
//                 <p className="text-color6">{tour[0]?.tour_description}</p>
//                 <div className="flex flex-wrap my-4">
//                   <div className="w-[50%] flex">
//                     <i className="bi bi-clock text-color4"></i>
//                     <p className="text-color6 ms-2">{tour[0]?.duration}</p>
//                   </div>
//                   <div className="w-[50%] flex">
//                     <i className="bi bi-geo-alt text-color4"></i>
//                     <p className="text-color6 ms-2">{tour[0]?.end_position.location_name}</p>
//                   </div>
//                   <div className="w-[50%] flex">
//                     <i className="bi bi-person text-color4"></i>
//                     <p className="text-color6 ms-2">{tour[0]?.duration}</p>
//                   </div>
//                   <div className="w-[50%] flex">
//                     <i className="bi bi-emoji-smile text-color4"></i>
//                     <p className="text-color6 ms-2">{list.superb}</p>
//                   </div>
//                 </div>
//                 <div className="flex gap-5 mt-6">
//                   <button className="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
//                     onClick={() => navigate('/tour-detail')}
//                   >
//                     <span className="relative px-2 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
//                       Tour Details
//                     </span>
//                   </button>

//                   <button className="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
//                     <span className="relative px-2 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
//                       Booking Now
//                     </span>
//                   </button>

//                 </div>
//               </div>
//               <img
//                 src={tour[0]?.tour_img}
//                 alt={tour[0]?.end_position.location_name}
//                 className="w-[100%] h-[100%] object-cover brightness-75 absolute"
//               />
//               <p className="absolute uppercase text-white bg-color3 px-4 py-1 right-1 top-12 rotate-[-90deg] ">
//                 {list.nameCountry}
//               </p>
//               <figcaption className="absolute text-white bottom-8 right-10 fig">
//                 <p className="capitalize font-secondary text-3xl" style={{paddingLeft: "50px"}}>
//                   {tour[0]?.tour_name}
//                 </p>
//                 <p className="text-right">{list.price}</p>
//               </figcaption>
//             </figure>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// }