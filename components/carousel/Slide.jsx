import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import SlideInner from "./SlideInner";
import { pullData } from "utils/pullData";

const Slider = ({ data, orientation }) => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 6000,
        disableOnInteraction: true,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper main-carousel"
    >
      {data.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <SlideInner
              image={`/images/slides/${slide.image}`}
              heading={slide.title}
              text={slide.description}
              link={slide.link.ref}
              linkText={slide.link.text}
              orientation={orientation}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
