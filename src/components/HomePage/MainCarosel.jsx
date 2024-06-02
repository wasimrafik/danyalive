import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../../App.css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import client6 from "../../assets/main.jpg";

const MainCarosel = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiperMainCarosule"
      >
        <SwiperSlide>
          <img className="w-full h-auto object-cover" src={client6} alt="CompanyLogo" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-auto object-cover" src={client6} alt="CompanyLogo" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-auto object-cover" src={client6} alt="CompanyLogo" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-auto object-cover" src={client6} alt="CompanyLogo" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-auto object-cover" src={client6} alt="CompanyLogo" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-auto object-cover" src={client6} alt="CompanyLogo" />
        </SwiperSlide>
      </Swiper>
      <hr />
    </>
  );
}

export default MainCarosel;