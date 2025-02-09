import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import Slide1 from "../../../assets/home/slide1.jpg";
import Slide2 from "../../../assets/home/slide2.jpg";
import Slide3 from "../../../assets/home/slide3.jpg";
import Slide4 from "../../../assets/home/slide4.jpg";
import Slide5 from "../../../assets/home/slide5.jpg";
// import required modules
import { Pagination } from "swiper/modules";
function Cantegory() {
  return (
    <>
      <Swiper
        
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <img src={Slide1} />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide2} />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">
            Pizza
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide3} />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">
            Soup
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide4} />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">
            Cake
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide5} />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">
            Vegitables
          </h3>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Cantegory;
