import { useRef, useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

const PanoramaSlider = ({ images }) => {
  const swiperContainer = useRef(null);

  useEffect(() => {
    const swiper = new Swiper(swiperContainer.current, {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });

    return () => {
      swiper.destroy();
    };
  }, [images]);

  return (
    <div className="swiper-container" ref={swiperContainer}>
      <div className="swiper-wrapper">
        {images.map((image, index) => (
          <div key={index} className="swiper-slide">
            <img
              src={image}
              alt={`Panorama ${index + 1}`}
              style={{ maxWidth: '100%', maxHeight: '400px' }}
            />
          </div>
        ))}
      </div>
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default PanoramaSlider;
