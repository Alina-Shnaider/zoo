const React = require('react');
// Import Swiper React components
const { Swiper, SwiperSlide } = require('swiper/react');

// Import Swiper styles
require('swiper/css');
require('swiper/css/navigation');
require('swiper/css/pagination');

require('./styles.css');

// import required modules
const { Navigation, Pagination, Mousewheel, Keyboard } = require('swiper/modules');

module.exports = function App() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </>
  );
};
