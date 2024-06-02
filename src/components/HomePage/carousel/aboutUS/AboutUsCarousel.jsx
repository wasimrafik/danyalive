// import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../../../../App.css';
import 'swiper/css/pagination';
import {Autoplay, Pagination, Navigation } from 'swiper/modules';
import "react-alice-carousel/lib/alice-carousel.css";
import client1 from "../../../../assets/ourClient1.png";
import client2 from "../../../../assets/OurClient2.png";
import client3 from "../../../../assets/OurClient3.png";
import client4 from "../../../../assets/OurClient4.png";
import client5 from "../../../../assets/OurClient5.png";
import client6 from "../../../../assets/logo.png";

const AboutUsCarousel = () => {
  return (
    <>
  <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        width={300}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay,Pagination, Navigation]}
        className="mySwiperAboutUs"
      >
        <SwiperSlide><img className="swiperWidthAboutus" src={client1} alt="CompanyLogo" key={client1} /></SwiperSlide>
        <SwiperSlide><img className="swiperWidthAboutus" src={client2} alt="CompanyLogo" key={client2} /></SwiperSlide>
        <SwiperSlide><img className="swiperWidthAboutus" src={client3} alt="CompanyLogo" key={client3} /></SwiperSlide>
        <SwiperSlide><img className="swiperWidthAboutus" src={client4} alt="CompanyLogo" key={client4} /></SwiperSlide>
        <SwiperSlide><img className="swiperWidthAboutus" src={client5} alt="CompanyLogo" key={client5} /></SwiperSlide>
        <SwiperSlide><img className="swiperWidthAboutus" src={client6} alt="CompanyLogo" key={client6} /></SwiperSlide>
      </Swiper>

  </>
  )
}

export default AboutUsCarousel