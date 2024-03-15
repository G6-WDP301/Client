import React, { useState, useEffect } from 'react';
import { Navbar, NavbarLogin, Footer } from '@/layout';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Aos from 'aos';
import {
  Card,
  CardHeader,
  Grid,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  Button,
  Paper,
  Box,
} from '@mui/material';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import { jwtDecode } from 'jwt-decode';
import moment from 'moment';
import NavbarPartnerLogin from '../../layout/NavbarPartnerLogin/index.jsx';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useParams } from 'react-router-dom';


const DetailTour = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [logPartner, setLogPartner] = useState(false);
  const [user, setUser] = useState({});
  const [tours, setTours] = useState([]);

  const [schedule, setSchedule] = useState([]);
  
  const [tourData, setTourData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    Aos.init({ duration: 2000 });
    const token = localStorage.getItem('token');
    setIsLoggedIn(Boolean(token));
  }, []);

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
          console.log(decodedToken);
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

  const {id} = useParams();

  useEffect(() => {
    const tourItems = () => {
      axios
        .get(`http://localhost:8080/api/tour/${id}`)
        .then((response) => {
          const toursData = response.data.tour.tour;
          setTourData(toursData);
          console.log('data tour:', tourData);
        })
        .catch((error) => console.log(error));
    };

    tourItems();
  }, [id]);

//   useEffect(() => {
//     const scheduleItems = () => {
//       axios
//         .get(`http://localhost:8080/api/schedule/${}`)
//         .then((response) => {
//           const scheduleData = response.data.tour.scheduleOfTour;
//           setSchedule(scheduleData);
//           console.log('schedule tour:', scheduleData);
//         })
//         .catch((error) => console.log(error));
//     };

//     scheduleItems();
//   }, [id]);

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

      <div>
        <section className="w-full bg-boat bg-cover bg-bottom bg-no-repeat h-[50vh] flex justify-center bg-color2 bg-blend-multiply bg-opacity-50">
          <div className="w-full container flex justify-center items-center flex-col">
            <p className="text-white font-secondary text-3xl 2xl:text-6xl">
              Manage Tour
            </p>
          </div>
        </section>

        <div className="mt-16">
          <div data-aos="fade-up" data-aos-duration="2500" className="secIntro">
            <h2 className="secTitle font-bold text-xl">
              Innovate Captivating Tours
            </h2>
            <p>
              Create captivating and exciting tours, enabling customers to have
              the best experiences possible.
            </p>
          </div>
        </div>

        <div style={{marginTop:'2rem ', marginBottom:'6rem'}}>
          <div className="bg-white border border-4 rounded-lg shadow relative m-10">
            <div className="flex items-start justify-between p-5 border-b rounded-t">
              <h3 className="text-xl font-semibold">Edit Detail Tour</h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                data-modal-toggle="product-modal"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>

            <div className="p-6 space-y-6">
                {
                    [tourData]?.map((item) => (
                        <form action="#" key={item?.id}>
                            <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-full">
                                <label
                                htmlFor="tour-name"
                                className="text-sm font-medium text-gray-900 block mb-2"
                                >
                                Name
                                </label>
                                <input
                                type="text"
                                name="tour-name"
                                id="tour-name"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                placeholder=""
                                required=""
                                vvalue={item?.tour_name}
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label
                                htmlFor="price"
                                className="text-sm font-medium text-gray-900 block mb-2"
                                >
                                Price
                                </label>
                                <input
                                type="number"
                                name="price"
                                id="price"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                placeholder="$$$"
                                required=""
                                value={item?.tour_price}
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label
                                htmlFor="price"
                                className="text-sm font-medium text-gray-900 block mb-2"
                                >
                                Discount
                                </label>
                                <input
                                type="number"
                                name="discount"
                                id="discount"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                placeholder="$$$"
                                required=""
                                value={item?.discount}
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label
                                htmlFor="max-tourist"
                                className="text-sm font-medium text-gray-900 block mb-2"
                                >
                                Max Tourist
                                </label>
                                <input
                                type="number"
                                name="max-tourist"
                                id="max-tourist"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                placeholder=""
                                required=""
                                value={item?.max_tourist}
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label
                                htmlFor="transportion"
                                className="text-sm font-medium text-gray-900 block mb-2"
                                >
                                Transportion
                                </label>
                                <input
                                type="text"
                                name="transportion"
                                id="transportion"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                placeholder=""
                                required=""
                                value={item?.tour_transportion === '65a8f3c00786c8565da58457' ? 'Xe may' : 'No transportion'}
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label
                                htmlFor="start-date"
                                className="text-sm font-medium text-gray-900 block mb-2"
                                >
                                Start Date
                                </label>
                                <input
                                type="date"
                                name="start-date"
                                id="start-date"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                required=""
                                value={moment(item?.start_date).format('DD/MM/YYYY')}
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label
                                htmlFor="end-date"
                                className="text-sm font-medium text-gray-900 block mb-2"
                                >
                                End Date
                                </label>
                                <input
                                type="date"
                                name="end-date"
                                id="end-date"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                required=""
                                value={moment(item?.end_date).format('DD/MM/YYYY')}
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label
                                htmlFor="start-position"
                                className="text-sm font-medium text-gray-900 block mb-2"
                                >
                                Start Position
                                </label>
                                <input
                                type="text"
                                name="start-position"
                                id="start-position"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                required=""
                                value={item?.start_position}
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label
                                for="end-position"
                                className="text-sm font-medium text-gray-900 block mb-2"
                                >
                                End Position
                                </label>
                                <input
                                type="text"
                                name="end-position"
                                id="end-position"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                placeholder=""
                                required=""
                                value={item?.end_position}
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label
                                for="image"
                                className="text-sm font-medium text-gray-900 block mb-2"
                                >
                                Image
                                </label>
                                <div
                                className="w-[auto] height-[auto] relative border-2 border-gray-300 border-dashed rounded-lg p-6"
                                id="dropzone"
                                >
                                <input
                                    type="file"
                                    className="absolute inset-0 w-full h-full opacity-0 z-50"
                                />
                                <div className="text-center">
                                    <img
                                    className="mx-auto h-12 w-12"
                                    src="https://www.svgrepo.com/show/357902/image-upload.svg"
                                    alt=""
                                    />

                                    <h3 className="mt-2 text-sm font-medium text-gray-900">
                                    <label
                                        for="file-upload"
                                        className="relative cursor-pointer"
                                    >
                                        <span>Drag and drop</span>
                                        <span className="text-indigo-600"> or browse</span>
                                        <span>to upload</span>
                                        <input
                                        id="file-upload"
                                        name="file-upload"
                                        type="file"
                                        className="sr-only"
                                        />
                                    </label>
                                    </h3>
                                    <p className="mt-1 text-xs text-gray-500">
                                    PNG, JPG, GIF up to 10MB
                                    </p>
                                </div>

                                <img
                                    src=""
                                    className="mt-4 mx-auto max-h-40 hidden"
                                    id="preview"
                                />
                                </div>
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <div className="mb-5 rounded-md bg-[#F5F7FB] py-4 px-8">
                                    {/* <div className="flex items-center justify-between">
                                        <span className="truncate pr-3 text-base font-medium text-[#07074D]">
                                        banner-design.png
                                        </span>
                                        <button className="text-[#07074D]">
                                        <svg
                                            width="10"
                                            height="10"
                                            viewBox="0 0 10 10"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z"
                                            fill="currentColor"
                                            />
                                            <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z"
                                            fill="currentColor"
                                            />
                                        </svg>
                                        </button>
                                    </div> */}
                                    <div className="flex item-center justify-between">
                                        <img src={item?.tour_img} alt='tour image'/>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label
                                htmlFor="description"
                                className="text-sm font-medium text-gray-900 block mb-2"
                                >
                                Description
                                </label>
                                <CKEditor
                                editor={ClassicEditor}
                                data={item?.tour_description}
                                // onChange={(event, editor) => {
                                //     const data = editor.getData();
                                // }}
                                />

                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label
                                htmlFor="schedule-name"
                                className="text-sm font-medium text-gray-900 block mb-2"
                                >
                                Schedule name
                                </label>
                                <input
                                type="text"
                                name="schedule-name"
                                id="schedule-name"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                placeholder=""
                                required=""                               
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label
                                htmlFor="schedule-date"
                                className="text-sm font-medium text-gray-900 block mb-2"
                                >
                                Schedule date 
                                </label>
                                <input
                                type="text"
                                name="schedule-date"
                                id="schedule-date"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                placeholder=""
                                required=""
                                />
                            </div>

                            <div className="col-span-full">
                                <label
                                htmlFor="schedule-detail"
                                className="text-sm font-medium text-gray-900 block mb-2"
                                >
                                Schedule detail
                                </label>
                                <CKEditor
                                editor={ClassicEditor}
                                // data={item?.tour_description}
                                // onChange={(event, editor) => {
                                //     const data = editor.getData();
                                // }}
                                />

                            </div>

                            </div>
                        </form>
                    ))
                }
            </div>

            <div className="p-6 border-t border-gray-200 rounded-b">
              <button
                className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                type="submit"
              >
                Save all
              </button>
              <button
                className="ml-4 text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                onClick={() => navigate('/manage-tour')}
              >
                Return Manage Tour
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
};

export default DetailTour;
