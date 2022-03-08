// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import placeholder from "public/images/features/sg-male-1.jpg";
import placeholder2 from "public/images/features/sg_female.jpg";
const Slider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="container">
            <img src={placeholder.src} width="100%" className="img-fluid" height="100%" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container">
            <img src={placeholder2.src} width="100%" className="img-fluid" height="100%" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
