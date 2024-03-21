import React, { useState, useEffect } from 'react';
import { Navbar, NavbarLogin, Footer } from '@/layout';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Aos from 'aos';
import moment from 'moment';
import NavbarPartnerLogin from '../../layout/NavbarPartnerLogin/index.jsx';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateTour = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [logPartner, setLogPartner] = useState(false);
    const [location, setLocation] = useState([]);
    const [vehicle, setVehicle] = useState([]);
    const navigate = useNavigate();

    // Field form
    const [tourName, setTourName] = useState('');
    const [price, setPrice] = useState('');
    const [discount, setDiscount] = useState('');
    const [maxTourist, setMaxTourist] = useState('');
    const [transportion, setTransportion] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [startPosition, setStartPosition] = useState('');
    const [endPosition, setEndPosition] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [duration, setDuration] = useState('');
    const [tax, setTax] = useState('');
    const [errors, setErrors] = useState({});

    const handleEditorChange = (event, editor) => {
        const htmlData = editor.getData();
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = htmlData;
        const plainTextData = tempDiv.textContent || tempDiv.innerText || "";
        setDescription(plainTextData);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'tour-name':
                setTourName(value);
                break;
            case 'price':
                setPrice(value);
                break;
            case 'discount':
                setDiscount(value);
                break;
            case 'max-tourist':
                setMaxTourist(value);
                break;
            case 'transportion':
                setTransportion(value);
                break;
            case 'start-date':
                setStartDate(value);
                break;
            case 'end-date':
                setEndDate(value);
                break;
            case 'start-position':
                setStartPosition(value);
                break;
            case 'end-position':
                setEndPosition(value);
                break;
            case 'description':
                setDescription(value);
                break;
            case 'file-upload':
                setImage(value);
                break;
            case 'duration':
                setDuration(value);
                break;
            case 'tax':
                setTax(value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(tax);

        // Validate the form
        const errors = {};
        if (!tourName) {
            errors.tourName = 'Tour Name is required';
        }
        if (!price) {
            errors.price = 'Price is required';
        }
        if (!discount) {
            errors.discount = 'Discount is required';
        }
        if (!transportion) {
            errors.transportion = 'Transportion is required';
        }
        if (!maxTourist) {
            errors.maxTourist = 'Max tourist is required';
        }
        if (!startDate) {
            errors.startDate = 'Start date is required';
        }
        if (!endDate) {
            errors.endDate = 'End date is required';
        }
        if (!startPosition) {
            errors.startPosition = 'Start position is required';
        }
        if (!endPosition) {
            errors.endPosition = 'End position is required';
        }
        if (!description) {
            errors.description = 'Description is required';
        }
        if (!image) {
            errors.image = 'Image of tour is required';
        }
        if (!duration) {
            errors.duration = 'Duration of tour is required';
        }
        if (!tax) {
            errors.tax = 'Tax is required';
        }
        // If errors
        if (Object.keys(errors).length > 0) {
            setErrors(errors);
        } else {
            axios.post('http://localhost:8080/api/tour/create', {
                "tour_name": tourName,
                "tour_description": description,
                "tour_transportion": transportion,
                "tour_price": price,
                "discount": discount,
                "tour_img": image,
                "max_tourist": maxTourist,
                "start_date": startDate,
                "end_date": endDate,
                "start_position": startPosition,
                "end_position": endPosition,
                "duration": duration,
                "return_tax": tax
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((response) => {
                    const tour = response.data;
                    toast.success("Create tour successful ~")
                })
                .catch((error) => {
                    const errorData = error.response.data.error;
                    toast.error(errorData);
                })
        }
    };

    useEffect(() => {
        Aos.init({ duration: 2000 });
        const token = localStorage.getItem('token');
        setIsLoggedIn(Boolean(token));
        // Get location 
        axios
            .get('http://localhost:8080/api/location/all')
            .then((res) => {
                const locationData = res.data.locations.locationSaved;
                setLocation(locationData);
            })
            .catch((error) => {
                console.log('Error ne: ', error);
            })

        // Get transportion
        axios
            .get('http://localhost:8080/api/transportion')
            .then((res) => {
                const vehicleData = res.data.transportions;
                setVehicle(vehicleData);
            })
            .catch((error) => {
                console.log('Error ne: ', error);
            })
    }, [location, vehicle]);

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
                            Create Tour
                        </h2>
                        <p>
                            Let's create a tour to serve tourists.
                        </p>
                    </div>
                </div>

                <div style={{ marginTop: '2rem ', marginBottom: '6rem' }}>
                    <div className="bg-white border border-4 rounded-lg shadow relative m-10">
                        <div className="flex items-start justify-between p-5 border-b rounded-t">
                            <h3 className="text-xl font-semibold">Information of Tour</h3>
                        </div>

                        <div className="p-6 space-y-6">
                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-full">
                                        <label
                                            htmlFor="tour-name"
                                            className="text-sm font-medium text-gray-900 block mb-2"
                                        >
                                            Tour Name
                                        </label>
                                        <input
                                            type="text"
                                            name="tour-name"
                                            id="tour-name"
                                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                            placeholder=""
                                            required
                                            value={tourName}
                                            onChange={(e) => setTourName(e.target.value)}
                                        />
                                        {errors.tourName && <p className="text-red-500 text-xs mt-1">{errors.tourName}</p>}
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label
                                            htmlFor="price"
                                            className="text-sm font-medium text-gray-900 block mb-2"
                                        >
                                            Tour price
                                        </label>
                                        <input
                                            type="number"
                                            name="price"
                                            id="price"
                                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                            placeholder="$"
                                            required
                                            value={price}
                                            onChange={(e) => setPrice(e.target.value)}
                                        />
                                        {errors.price && <p className="text-red-500 text-xs mt-1">{errors.price}</p>}
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
                                            placeholder="$"
                                            required
                                            value={discount}
                                            onChange={(e) => setDiscount(e.target.value)}
                                        />
                                        {errors.discount && <p className="text-red-500 text-xs mt-1">{errors.discount}</p>}
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
                                            required
                                            value={maxTourist}
                                            onChange={(e) => setMaxTourist(e.target.value)}
                                        />
                                        {errors.maxTourist && <p className="text-red-500 text-xs mt-1">{errors.maxTourist}</p>}
                                    </div>

                                    {/* <div className="col-span-6 sm:col-span-3">
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
                                            required
                                            value={transportion}
                                            onChange={(e) => setTransportion(e.target.value)}
                                        />
                                        {errors.transportion && <p className="text-red-500 text-xs mt-1">{errors.transportion}</p>}
                                    </div> */}

                                    <div className="col-span-6 sm:col-span-3">
                                        <label
                                            htmlFor="transportion"
                                            className="text-sm font-medium text-gray-900 block mb-2"
                                        >
                                            Transportion
                                        </label>
                                        <select
                                            style={{ width: "100%" }}
                                            name='transportion'
                                            required
                                            value={transportion}
                                            onChange={(e) => setTransportion(e.target.value)}
                                        >
                                            <option value="">Choose vehicle</option>
                                            {vehicle.map((veh) => (
                                                <option value={veh._id} key={veh._id}>
                                                    {veh?.transportion_name}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.transportion && <p className="text-red-500 text-xs mt-1">{errors.transportion}</p>}
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
                                            required
                                            value={startDate}
                                            onChange={(e) => setStartDate(e.target.value)}
                                        />
                                        {errors.startDate && <p className="text-red-500 text-xs mt-1">{errors.startDate}</p>}
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
                                            required
                                            value={endDate}
                                            onChange={(e) => setEndDate(e.target.value)}
                                        />
                                        {errors.endDate && <p className="text-red-500 text-xs mt-1">{errors.endDate}</p>}
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label
                                            htmlFor="start-position"
                                            className="text-sm font-medium text-gray-900 block mb-2"
                                        >
                                            Start Position
                                        </label>
                                        <select
                                            style={{ width: "100%" }}
                                            name='start-position'
                                            required
                                            value={startPosition}
                                            onChange={(e) => setStartPosition(e.target.value)}
                                        >
                                            <option value="">Choose start position</option>
                                            {location.map((loc) => (
                                                <option value={loc._id} key={loc._id}>
                                                    {loc?.location_name}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.startPosition && <p className="text-red-500 text-xs mt-1">{errors.startPosition}</p>}
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label
                                            htmlFor="start-position"
                                            className="text-sm font-medium text-gray-900 block mb-2"
                                        >
                                            End Position
                                        </label>
                                        <select
                                            style={{ width: "100%" }}
                                            name='end-position'
                                            required
                                            value={endPosition}
                                            onChange={(e) => setEndPosition(e.target.value)}
                                        >
                                            <option value="">Choose end position</option>
                                            {location.map((loc) => (
                                                <option value={loc._id} key={loc._id}>
                                                    {loc?.location_name}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.endPosition && <p className="text-red-500 text-xs mt-1">{errors.endPosition}</p>}
                                    </div>

                                    {/* <div className="col-span-6 sm:col-span-3">
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
                                                            required
                                                            value={image}
                                                            onChange={(e) => setImage(e.target.files)[0]}
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
                                        {errors.image && <p className="text-red-500 text-xs mt-1">{errors.image}</p>}
                                    </div> */}



                                    {/* <div className="col-span-6 sm:col-span-3">
                                                <div className="mb-5 rounded-md bg-[#F5F7FB] py-4 px-8">
                                                    <div className="flex items-center justify-between">
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
                                                    </div>
                                                    <div className="flex item-center justify-between">
                                                        <img src='#' />
                                                    </div>
                                                </div>
                                            </div> */}

                                    <div className="col-span-6 sm:col-span-3">
                                        <label
                                            htmlFor="image"
                                            className="text-sm font-medium text-gray-900 block mb-2"
                                        >
                                            Url image
                                        </label>
                                        <input
                                            type="text"
                                            name="image"
                                            id="image"
                                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                            placeholder="Paste url image of tour"
                                            required
                                            value={image}
                                            onChange={(e) => setImage(e.target.value)}
                                        />
                                        {errors.image && <p className="text-red-500 text-xs mt-1">{errors.image}</p>}
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label
                                            htmlFor="duration"
                                            className="text-sm font-medium text-gray-900 block mb-2"
                                        >
                                            Duration
                                        </label>
                                        <input
                                            type="number"
                                            name="duration"
                                            id="duration"
                                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                            placeholder=""
                                            required
                                            value={duration}
                                            onChange={(e) => setDuration(e.target.value)}
                                        />
                                        {errors.duration && <p className="text-red-500 text-xs mt-1">{errors.duration}</p>}

                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label
                                            htmlFor="tax"
                                            className="text-sm font-medium text-gray-900 block mb-2"
                                        >
                                            Tax
                                        </label>
                                        <input
                                            type="number"
                                            name="tax"
                                            id="tax"
                                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                            placeholder=""
                                            required
                                            value={tax}
                                            onChange={(e) => setTax(e.target.value)}
                                        />
                                        {errors.tax && <p className="text-red-500 text-xs mt-1">{errors.tax}</p>}

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
                                            data={description}
                                            onChange={handleEditorChange}
                                        />
                                        {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
                                    </div>
                                </div>
                                <button
                                    className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                    type='submit'
                                    style={{
                                        marginTop: "50px",
                                        paddingLeft: "40px",
                                        paddingRight: "40px"
                                    }}
                                >
                                    Create tour
                                </button>
                            </form>
                        </div>

                        <div className="p-6 border-t border-gray-200 rounded-b" style={{ textAlign: "center" }}>
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

            <Footer />
        </>
    );
};

export default CreateTour;