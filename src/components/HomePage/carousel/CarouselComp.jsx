import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../../../App.css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'react-alice-carousel/lib/alice-carousel.css';
import client1 from "../../../assets/ourClient1.png";
import client2 from "../../../assets/OurClient2.png";
import client3 from "../../../assets/OurClient3.png";
import client4 from "../../../assets/OurClient4.png";
import client5 from "../../../assets/OurClient5.png";
import client6 from "../../../assets/logo.png";

const CarouselComp = () => (
  <>
    <div className="text-center">
      <h1 className="mt-5 text-2xl md:text-3xl lg:text-4xl">Our Business Partners</h1>
      <div className="text-center mt-4 px-4 md:px-8 lg:px-16">
        <p className="text-sm md:text-base lg:text-lg">
          Meet our trusted partner, the one-stop destination for all your spare parts needs. With a vast inventory and expert knowledge, they keep your machinery running smoothly.
        </p>
      </div>
    </div>
    <Swiper
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 1, spaceBetween: 20 },
        768: { slidesPerView: 2, spaceBetween: 30 },
        1024: { slidesPerView: 3, spaceBetween: 40 },
      }}
      loop={true}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide><img className="swiperWidth mx-auto" src={client1} alt="CompanyLogo" key={client1} /></SwiperSlide>
      <SwiperSlide><img className="swiperWidth mx-auto" src={client2} alt="CompanyLogo" key={client2} /></SwiperSlide>
      <SwiperSlide><img className="swiperWidth mx-auto" src={client3} alt="CompanyLogo" key={client3} /></SwiperSlide>
      <SwiperSlide><img className="swiperWidth mx-auto" src={client4} alt="CompanyLogo" key={client4} /></SwiperSlide>
      <SwiperSlide><img className="swiperWidth mx-auto" src={client5} alt="CompanyLogo" key={client5} /></SwiperSlide>
      <SwiperSlide><img className="swiperWidth mx-auto" src={client6} alt="CompanyLogo" key={client6} /></SwiperSlide>
    </Swiper>
    <hr />
  </>
);

export default CarouselComp;
