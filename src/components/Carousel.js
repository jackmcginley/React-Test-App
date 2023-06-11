// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Slider from './Slider';

const Carousel = (props) => {
  const { slides } = props;

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      {slides.map((slide) => {
        return (
          <SwiperSlide key={slide.Title}>
            <Slider
              title={slide.Title}
              subTitle={slide.Subtitle}
              url={slide.ImageUrl}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
export default Carousel;
