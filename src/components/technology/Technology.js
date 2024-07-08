import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; 
import './Technology.css';
import { GoDotFill } from "react-icons/go";
import { BsDashLg } from "react-icons/bs";

const TechnologyStack = () => {
  return (
    <div className="technology-stack-container">
      <h2>Technology stack</h2>
      <div><GoDotFill className='dot'/><GoDotFill className='dot'/><GoDotFill className='dot'/><BsDashLg className='dash'/></div>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 1000 }}
        grabCursor={true}
        breakpoints={{ 
          640: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 8,
            spaceBetween: 20
          }
        }}
        className="technology-stack-icons"
      >
        <SwiperSlide>
          <img src="https://speedlinkng.com/wp-content/uploads/elementor/thumbs/c-sharp-icon-qlr0q7d58lgekoy4kwqfxe7lhuhyfagf9b949gog90.png" alt="C# Icon" className="tech-icon" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://speedlinkng.com/wp-content/uploads/elementor/thumbs/android-logo-qlr0q7d58lgekoy4kwqfxe7lhuhyfagf9b949gog90.png" alt="Android Icon" className="tech-icon" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://speedlinkng.com/wp-content/uploads/elementor/thumbs/postgre-qlr0q7d58lgekoy4kwqfxe7lhuhyfagf9b949gog90.png" alt="PostgreSQL Icon" className="tech-icon" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://speedlinkng.com/wp-content/uploads/elementor/thumbs/Node-Js-Logo-qlr0q7d58lgekoy4kwqfxe7lhuhyfagf9b949gog90.png" alt="Node.js Icon" className="tech-icon" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://speedlinkng.com/wp-content/uploads/elementor/thumbs/Gulp-logo-qlr0q7d58lgekoy4kwqfxe7lhuhyfagf9b949gog90.png" alt="Gulp Icon" className="tech-icon" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://speedlinkng.com/wp-content/uploads/elementor/thumbs/React-icon-qlr0q7d58lgekoy4kwqfxe7lhuhyfagf9b949gog90.png" alt="React Icon" className="tech-icon" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://speedlinkng.com/wp-content/uploads/elementor/thumbs/css-3-qlr0q7d58lgekoy4kwqfxe7lhuhyfagf9b949gog90.png" alt="CSS Icon" className="tech-icon" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://speedlinkng.com/wp-content/uploads/elementor/thumbs/python-qlr0q7d58lgekoy4kwqfxe7lhuhyfagf9b949gog90.png" alt="Python Icon" className="tech-icon" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://speedlinkng.com/wp-content/uploads/elementor/thumbs/php-qlr0q7d58lgekoy4kwqfxe7lhuhyfagf9b949gog90.png" alt="PHP Icon" className="tech-icon" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TechnologyStack;
