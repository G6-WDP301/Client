import React, { useState, useEffect } from 'react';
import './profile.scss';
import { Navbar } from '@/layout';
import axios from 'axios';
import moment from 'moment';
import { jwtDecode } from 'jwt-decode';

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from '@material-tailwind/react';
import EditIcon from '@mui/icons-material/Edit';


import card_profile1 from '../../images/card_profile1.jpg'
import card_profile2 from '../../images/card_profile2.jpg'
import card_profile3 from '../../images/card_profile3.jpg'
import card_profile4 from '../../images/card_profile4.jpg'


const card = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    title: 'Wooden House, Florida',
    des: 'Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows.',
    rate: '5.0'
  },
  {
    id: 2,
    img: card_profile1,
    title: 'Wooden House, Florida',
    des: 'Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows.',
    rate: '4.5'
  },
  {
    id: 3,
    img: card_profile2,
    title: 'Wooden House, Florida',
    des: 'Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows.',
    rate: '4.0'
  },
  {
    id: 4,
    img: card_profile3,
    title: 'Wooden House, Florida',
    des: 'Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows.',
    rate: '4.0'
  },
  {
    id: 5,
    img: card_profile4,
    title: 'Wooden House, Florida',
    des: 'Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows.',
    rate: '4.0'
  },
  {
    id: 6,
    img: 'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    title: 'Wooden House, Florida',
    des: 'Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows.',
    rate: '4.0'
  },

]

export default function index() {
  const [user, setUser] = useState({});
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.user_id;
      // Tiếp tục xử lý hoặc gọi API với userId đã lấy được
      axios.get(`http://localhost:8080/api/user/${userId}`)
        .then((response) => {
          const userData = response.data.data;
          setUser(userData);
        })
        .catch((error) => {
          console.log('Error:', error);
        });
    }
  }, []);

  return (
    <>
      <Navbar />
      <section className="w-full bg-boat bg-cover bg-bottom bg-no-repeat h-[50vh] flex justify-center bg-color2 bg-blend-multiply bg-opacity-50" style={{ height: "70px" }}>
        <div className="w-full container flex justify-center items-center flex-col">
          <p className="text-white font-secondary text-3xl 2xl:text-6xl">
          </p>
        </div>
      </section>

      <section>
        <div className="h-full overflow-x-hidden bg-gray-200 p-8">
          <div className="bg-white rounded-lg shadow-xl pb-8">
            <div className="w-full h-[250px]">
              <img
                src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg"
                className="w-full h-full rounded-tl-lg rounded-tr-lg"
              />
            </div>
            <div className="flex flex-col items-center -mt-20">
              <img
                src={user.avatar}
                className="w-40 border-4 border-white rounded-full"
              />
              <div className="flex items-center space-x-2 mt-2">
                <p className="text-2xl">{user.username}</p>
                <span className="bg-blue-500 rounded-full p-1" title="Verified">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-gray-100 h-2.5 w-2.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="4"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </span>
              </div>
              {isPopupVisible && (
                <div className="popup">
                  {
                    <h1>Popup nek</h1>
                  }
                </div>
              )}
              <p className="text-sm text-gray-500">{user.address}</p>
            </div>
            <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
              <div className="flex items-center space-x-4 mt-2">
                <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                  </svg> */}
                  <svg className="w-5 h-5 text-slate-50 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.3 4.8 2.9 2.9M7 7H4a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h11c.6 0 1-.4 1-1v-4.5m2.4-10a2 2 0 0 1 0 3l-6.8 6.8L8 14l.7-3.6 6.9-6.8a2 2 0 0 1 2.8 0Z"/>
                  </svg>
                  <span>Edit</span>
                </button>
                <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  <span>Contact</span>
                </button>
              </div>
            </div>
          </div>

          <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
            <div className="w-full flex-1 flex-col">
              <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
                <h4 className="text-xl text-gray-900 font-bold">
                  Personal Info
                </h4>
                <ul className="mt-2 text-gray-700">
                  <li className="flex border-y py-2">
                    <span className="font-bold w-24">Full name:</span>
                    <span className="text-gray-700">{user.username}</span>
                  </li>
                  <li className="flex border-b py-2">
                    <span className="font-bold w-24">Birthday:</span>
                    <span className="text-gray-700">{moment(user.dob).format("DD/MM/YYYY")}</span>
                  </li>
                  <li className="flex border-b py-2">
                    <span className="font-bold w-24">Joined:</span>
                    <span className="text-gray-700">
                      10 Jan 2022 (25 days ago)
                    </span>
                  </li>
                  <li className="flex border-b py-2">
                    <span className="font-bold w-24">Phone:</span>
                    <span className="text-gray-700">{user.phoneNumber}</span>
                  </li>
                  <li className="flex border-b py-2">
                    <span className="font-bold w-24">Email:</span>
                    <span className="text-gray-700">
                      {user.email}
                    </span>
                  </li>
                  <li className="flex border-b py-2">
                    <span className="font-bold w-24">Address:</span>
                    <span className="text-gray-700">{user.address}</span>
                  </li>
                  <li className="flex items-center border-b py-2 space-x-2">
                    <span className="font-bold w-24">Elsewhere:</span>
                    <a href="#" title="Facebook">
                      <svg
                        className="w-5 h-5"
                        id="Layer_1"
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 506.86 506.86"
                      >
                        <path
                          className="cls-1"
                          d="M506.86,253.43C506.86,113.46,393.39,0,253.43,0S0,113.46,0,253.43C0,379.92,92.68,484.77,213.83,503.78V326.69H149.48V253.43h64.35V197.6c0-63.52,37.84-98.6,95.72-98.6,27.73,0,56.73,5,56.73,5v62.36H334.33c-31.49,0-41.3,19.54-41.3,39.58v47.54h70.28l-11.23,73.26H293V503.78C414.18,484.77,506.86,379.92,506.86,253.43Z"
                        ></path>
                        <path
                          className="cls-2"
                          d="M352.08,326.69l11.23-73.26H293V205.89c0-20,9.81-39.58,41.3-39.58h31.95V104s-29-5-56.73-5c-57.88,0-95.72,35.08-95.72,98.6v55.83H149.48v73.26h64.35V503.78a256.11,256.11,0,0,0,79.2,0V326.69Z"
                        ></path>
                      </svg>
                    </a>
                    <a href="#" title="Twitter">
                      <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 333333 333333"
                        shape-rendering="geometricPrecision"
                        text-rendering="geometricPrecision"
                        image-rendering="optimizeQuality"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                      >
                        <path
                          d="M166667 0c92048 0 166667 74619 166667 166667s-74619 166667-166667 166667S0 258715 0 166667 74619 0 166667 0zm90493 110539c-6654 2976-13822 4953-21307 5835 7669-4593 13533-11870 16333-20535-7168 4239-15133 7348-23574 9011-6787-7211-16426-11694-27105-11694-20504 0-37104 16610-37104 37101 0 2893 320 5722 949 8450-30852-1564-58204-16333-76513-38806-3285 5666-5022 12109-5022 18661v4c0 12866 6532 24246 16500 30882-6083-180-11804-1876-16828-4626v464c0 17993 12789 33007 29783 36400-3113 845-6400 1313-9786 1313-2398 0-4709-247-7007-665 4746 14736 18448 25478 34673 25791-12722 9967-28700 15902-46120 15902-3006 0-5935-184-8860-534 16466 10565 35972 16684 56928 16684 68271 0 105636-56577 105636-105632 0-1630-36-3209-104-4806 7251-5187 13538-11733 18514-19185l17-17-3 2z"
                          fill="#1da1f2"
                        ></path>
                      </svg>
                    </a>

                    <a href="#" title="Github">
                      <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="0"
                        height="0"
                        shape-rendering="geometricPrecision"
                        text-rendering="geometricPrecision"
                        image-rendering="optimizeQuality"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        viewBox="0 0 640 640"
                      >
                        <path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z"></path>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex-1 bg-white rounded-lg shadow-xl mt-4 p-8">
                <h4 className="text-xl text-gray-900 font-bold">
                  Activity log
                </h4>
                <div className="relative px-4">
                  <div className="absolute h-full border border-dashed border-opacity-20 border-secondary"></div>

                  <div className="flex items-center w-full my-6 -ml-1.5">
                    <div className="w-1/12 z-10">
                      <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                    </div>
                    <div className="w-11/12">
                      <p className="text-sm">Profile informations changed.</p>
                      <p className="text-xs text-gray-500">3 min ago</p>
                    </div>
                  </div>
                  <div className="flex items-center w-full my-6 -ml-1.5">
                    <div className="w-1/12 z-10">
                      <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                    </div>
                    <div className="w-11/12">
                      <p className="text-sm">
                        Connected with{' '}
                        <a href="#" className="text-blue-600 font-bold">
                          Colby Covington
                        </a>
                        .
                      </p>
                      <p className="text-xs text-gray-500">15 min ago</p>
                    </div>
                  </div>
                  <div className="flex items-center w-full my-6 -ml-1.5">
                    <div className="w-1/12 z-10">
                      <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                    </div>
                    <div className="w-11/12">
                      <p className="text-sm">
                        Invoice{' '}
                        <a href="#" className="text-blue-600 font-bold">
                          #4563
                        </a>{' '}
                        was created.
                      </p>
                      <p className="text-xs text-gray-500">57 min ago</p>
                    </div>
                  </div>
                  <div className="flex items-center w-full my-6 -ml-1.5">
                    <div className="w-1/12 z-10">
                      <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                    </div>
                    <div className="w-11/12">
                      <p className="text-sm">
                        Message received from{' '}
                        <a href="#" className="text-blue-600 font-bold">
                          Cecilia Hendric
                        </a>
                        .
                      </p>
                      <p className="text-xs text-gray-500">1 hour ago</p>
                    </div>
                  </div>
                  <div className="flex items-center w-full my-6 -ml-1.5">
                    <div className="w-1/12 z-10">
                      <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                    </div>
                    <div className="w-11/12">
                      <p className="text-sm">
                        New order received{' '}
                        <a href="#" className="text-blue-600 font-bold">
                          #OR9653
                        </a>
                        .
                      </p>
                      <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
                  </div>

                  <div className="flex items-center w-full my-6 -ml-1.5">
                    <div className="w-1/12 z-10">
                      <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                    </div>
                    <div className="w-11/12">
                      <p className="text-sm">
                        Message received from{' '}
                        <a href="#" className="text-blue-600 font-bold">
                          Jane Stillman
                        </a>
                        .
                      </p>
                      <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="flex items-center justify-between">
              <h4 className="text-xl text-gray-900 font-bold">
                Last tour being booking
              </h4>
              <a href="#" title="View All">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-500 hover:text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="mt-10 mb-10 grid grid-cols-3">
              {
                card.map((cardItem) => (
                  <Card key={cardItem.id} className="w-full max-w-[26rem] shadow-lg px-6 py-6 mb-7 hover:bg-slate-100 hover:cursor-pointer">
                    <CardHeader floated={false} color="blue-gray">
                      <img
                        src={cardItem.img}
                        alt={cardItem.title}
                      />
                      <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                      <IconButton
                        size="sm"
                        color="red"
                        variant="text"
                        className="!absolute top-2 right-6 rounded-full hover:cursor-pointer"
                      // onClick={handleHeart}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-6 w-6"
                        >
                          <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                        </svg>
                      </IconButton>
                    </CardHeader>
                    <CardBody>
                      <div className="mb-3 flex items-center justify-between">
                        <Typography
                          variant="h5"
                          color="blue-gray"
                          className="font-medium pb-2 pt-5"
                        >
                          {cardItem.title}
                        </Typography>
                        <Typography
                          color="blue-gray"
                          className="flex items-center gap-1.5 font-normal"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="-mt-0.5 h-5 w-5 text-yellow-700"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {cardItem.rate}
                        </Typography>
                      </div>
                      <Typography color="gray">
                        {cardItem.des}
                      </Typography>
                      <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
                        <Tooltip content="$129 per night">
                          <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="h-5 w-5"
                            >
                              <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
                              <path
                                fillRule="evenodd"
                                d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z"
                                clipRule="evenodd"
                              />
                              <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z" />
                            </svg>
                          </span>
                        </Tooltip>
                        <Tooltip content="Free wifi">
                          <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="h-5 w-5"
                            >
                              <path
                                fillRule="evenodd"
                                d="M1.371 8.143c5.858-5.857 15.356-5.857 21.213 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.06 0c-4.98-4.979-13.053-4.979-18.032 0a.75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182c4.1-4.1 10.749-4.1 14.85 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.062 0 8.25 8.25 0 00-11.667 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.204 3.182a6 6 0 018.486 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0 3.75 3.75 0 00-5.304 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182a1.5 1.5 0 012.122 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0l-.53-.53a.75.75 0 010-1.06z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                        </Tooltip>
                        <Tooltip content="2 bedrooms">
                          <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="h-5 w-5"
                            >
                              <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                              <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                            </svg>
                          </span>
                        </Tooltip>
                        <Tooltip content={`65" HDTV`}>
                          <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="h-5 w-5"
                            >
                              <path d="M19.5 6h-15v9h15V6z" />
                              <path
                                fillRule="evenodd"
                                d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v11.25C1.5 17.16 2.34 18 3.375 18H9.75v1.5H6A.75.75 0 006 21h12a.75.75 0 000-1.5h-3.75V18h6.375c1.035 0 1.875-.84 1.875-1.875V4.875C22.5 3.839 21.66 3 20.625 3H3.375zm0 13.5h17.25a.375.375 0 00.375-.375V4.875a.375.375 0 00-.375-.375H3.375A.375.375 0 003 4.875v11.25c0 .207.168.375.375.375z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                        </Tooltip>
                        <Tooltip content="Fire alert">
                          <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="h-5 w-5"
                            >
                              <path
                                fillRule="evenodd"
                                d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                        </Tooltip>
                        <Tooltip content="And +20 more">
                          <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                            +20
                          </span>
                        </Tooltip>
                      </div>
                    </CardBody>
                    <CardFooter className="pt-3">
                      <Button size="md" fullWidth={true} className='text-slate-500 hover:bg-slate-300 hover:text-slate-50'>
                        Booking
                      </Button>
                    </CardFooter>
                  </Card>
                ))
              }
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
