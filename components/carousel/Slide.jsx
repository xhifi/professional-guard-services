import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import placeholder from "public/images/slides/1.png";
import placeholder2 from "public/images/slides/2.png";

import SlideInner from "./SlideInner";

const Slider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 25000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper main-carousel"
      >
        <SwiperSlide>
          <div className="slide-inner position-relative">
            <Image src={placeholder.src} priority layout="fill" objectFit="cover" className="slide-img img-fluid position-absolute" />
            <div className="container-fluid px-5 content">
              <div className="col-12 col-md-6 ps-0 ps-md-3">
                <h1>Protecting You Like Our Own</h1>
                <p>
                  For whatever reason, if you want protection, we will protect you. We are experienced in providing security guard services to a range of industries including the
                  corporate sector, construction sites or even an event.
                </p>
                <a href="#" className="btn btn-lg btn-main">
                  Hello World
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-inner position-relative">
            <Image src={placeholder2.src} priority layout="fill" objectFit="cover" className="slide-img img-fluid position-absolute" />
            <div className="container-fluid px-5 content">
              <div className="col-12 col-md-6 ps-0 ps-md-3">
                <h1>Providing High End Solutions</h1>
                <p>
                  Since its inception, PGS Security has become one of the fastest growing security providers in the Industry. We provides a comprehensive range of security services
                  across a variety of industry sectors in all London.
                </p>
                <a href="#" className="btn btn-lg btn-main">
                  Hello World
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <SlideInner
            image={placeholder.src}
            heading="Lorem Ipsum"
            text="Since its inception, PGS Security has become one of the fastest growing security providers in the Industry. We provides a comprehensive range of security services
                  across a variety of industry sectors in all London."
            link="/"
            linkText="Click Me"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
