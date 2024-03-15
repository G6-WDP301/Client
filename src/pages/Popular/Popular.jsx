import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import './Popular.scss';
import { BsArrowLeftShort, BsArrowRightShort, BsDot } from 'react-icons/bs';
import DataContext from '../../layout/ContextData/ContextData.jsx';
import { useNavigate } from 'react-router-dom';

// import the images
import img from '../../images/image(1).jpg';
import img2 from '../../images/image(2).jpg';
import img3 from '../../images/image(3).jpg';
import img4 from '../../images/image(4).jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: 'Machu Picchu',
    location: 'Peru',
    grade: 'CULTURAL RELAX',
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: 'Machu Picchu',
    location: 'Peru',
    grade: 'CULTURAL RELAX',
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: 'Machu Picchu',
    location: 'Peru',
    grade: 'CULTURAL RELAX',
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: 'Machu Picchu',
    location: 'Peru',
    grade: 'CULTURAL RELAX',
  },
];

export default function Popular() {
  const headerData = useContext(DataContext);
  const headerDataArray = JSON.parse(JSON.stringify(headerData));

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [selectedTourId, setSelectedTourId] = useState([]);
  const navigate = useNavigate();

  const handleClickTour = (tourId) => {
    setSelectedTourId(tourId);
    navigate(`/tour-detail/${tourId}`);
  }

  const notify = () => toast("Feature being updated, please come back later!");

  return (
    <section className="popular container">
      {headerData.length != [] ? (
        <div className="secContainer">
          <div className="secHeader flex">
            <div data-aos="fade-right" data-aos-duration="2500" className="textDiv">
              <h2 className="secTitle font-bold">Tour just searched...</h2>
              <p>
                Hope your expectations are met!
              </p>
            </div>

            <div data-aos="fade-left" data-aos-duration="2500" className="iconsDiv flex">
              <BsArrowLeftShort className="icon leftIcon" />
              <BsArrowRightShort className="icon" />
            </div>
          </div>

          <div className="mainContent grid">
            {[headerDataArray].map((tour) => {
              const id = tour.tour_id;
              return (
                <div data-aos="fade-up" className="singleDestination" key={tour._id}>
                  <div className="destImage">
                    <img src={tour.tour_img} alt="Image title" />
                    <div className="overlayInfo">
                      <h3 className="font-bold text-lg">{tour.tour_description}</h3>
                      <p>{tour.start_position?.location_name}</p>
                      <BsArrowRightShort className="icon" onClick={() => handleClickTour(tour._id)} />
                    </div>
                  </div>

                  <div className="destFood">
                    <div className="number">{tour.end_position[0]?.location_name}</div>
                    <div className="destText flex">
                      <h6>{tour.tour_name}</h6>
                      <span className="flex">
                        <span className="dot">
                          <BsDot className="icon" />
                        </span>
                        Book now
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="secContainer">
          <div className="secHeader flex">
            <div data-aos="fade-right" data-aos-duration="2500" className="textDiv">
              <h2 className="secTitle font-bold">Popular Destination</h2>
              <p>
                From historical cities to natural spectacles, come see the best
                of the world!
              </p>
            </div>

            <div data-aos="fade-left" data-aos-duration="2500" className="iconsDiv flex">
              <BsArrowLeftShort className="icon leftIcon" />
              <BsArrowRightShort className="icon" />
            </div>
          </div>

          <div className="mainContent grid">
            {Data.map(({ id, imgSrc, destTitle, location, grade }) => {
              return (
                <div data-aos="fade-up" className="singleDestination" key={id}>
                  <div className="destImage">
                    <img src={imgSrc} alt="Image title" />

                    <div className="overlayInfo">
                      <h3 className="font-bold text-lg">{destTitle}</h3>
                      <p>{location}</p>

                      <BsArrowRightShort className="icon" onClick={notify} />
                    </div>
                  </div>

                  <div className="destFood">
                    <div className="number">{id}</div>

                    <div className="destText flex">
                      <h6>{location}</h6>
                      <span className="flex">
                        <span className="dot">
                          <BsDot className="icon" />
                        </span>
                        Book now
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section >
  );
}