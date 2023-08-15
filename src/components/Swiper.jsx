import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Slides from './Slides';

const Swipe = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={true}
      style={{ width: '979px' }}>
      {/* <SwiperSlide>
        <Slides />
      </SwiperSlide>
      <SwiperSlide>
        <Slides />
      </SwiperSlide> */}
    </Swiper>
  );
};
export default Swipe;
