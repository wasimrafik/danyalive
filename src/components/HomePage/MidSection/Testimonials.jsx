import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../../../App.css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import client6 from "../../../assets/logo.png";

const Testimonials = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl">Testimonials</h1>
      </div>
      <Swiper
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 40 },
        }}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="text-center p-4">
            <p className="text-base md:text-lg lg:text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              expedita voluptas culpa sapiente alias molestiae. Numquam corrupti
              in laborum sed rerum et corporis.”
            </p>

            <div className="mt-10 flex flex-col items-center justify-center text-base space-y-2">
              <img src={client6} width="80px" height="80px" alt="Client" />
              <div className="font-semibold text-gray-900">Mike Camblel</div>
              <svg
                viewBox="0 0 2 2"
                width={3}
                height={3}
                aria-hidden="true"
                className="fill-gray-900"
              >
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-gray-600">Director of Workcation</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-center p-4">
            <p className="text-base md:text-lg lg:text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              expedita voluptas culpa sapiente alias molestiae. Numquam corrupti
              in laborum sed rerum et corporis.”
            </p>
            <div className="mt-10 flex flex-col items-center justify-center text-base space-y-2">
              <img src={client6} width="80px" height="80px" alt="Client" />
              <div className="font-semibold text-gray-900">William Ross</div>
              <svg
                viewBox="0 0 2 2"
                width={3}
                height={3}
                aria-hidden="true"
                className="fill-gray-900"
              >
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-gray-600">Manager of Workcation</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-center p-4">
            <p className="text-base md:text-lg lg:text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              expedita voluptas culpa sapiente alias molestiae. Numquam corrupti
              in laborum sed rerum et corporis.”
            </p>
            <div className="mt-10 flex flex-col items-center justify-center text-base space-y-2">
              <img src={client6} width="80px" height="80px" alt="Client" />
              <div className="font-semibold text-gray-900">Judith Black</div>
              <svg
                viewBox="0 0 2 2"
                width={3}
                height={3}
                aria-hidden="true"
                className="fill-gray-900"
              >
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-gray-600">CEO of Workcation</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-center p-4">
            <p className="text-base md:text-lg lg:text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              expedita voluptas culpa sapiente alias molestiae. Numquam corrupti
              in laborum sed rerum et corporis.”
            </p>
            <div className="mt-10 flex flex-col items-center justify-center text-base space-y-2">
              <img src={client6} width="80px" height="80px" alt="Client" />
              <div className="font-semibold text-gray-900">Judith Black</div>
              <svg
                viewBox="0 0 2 2"
                width={3}
                height={3}
                aria-hidden="true"
                className="fill-gray-900"
              >
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-gray-600">CEO of Workcation</div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

    </>
  );
};

export default Testimonials;
