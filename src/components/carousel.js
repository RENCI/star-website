import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Keyboard, Navigation, Pagination } from 'swiper/modules';

import { StudentSlide } from './student-slide'

export const Carousel = ({students}) => {

  return (
      <Swiper 
        modules={[ Keyboard, Navigation, Pagination]}
        keyboard={{
          enabled: true,
        }}
        navigation={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        grabCursor={true}
        centeredSlides={true}
        spaceBetween={80}
        loop={true}
        breakpoints={{
          800: {slidesPerView: 2},
          0: {slidesPerView: 1}
        }}
      >
        {
          students.map((student) => (
            <SwiperSlide key={student.student_name}>
              <StudentSlide student={student}/>
            </SwiperSlide>
          ))
        }
      </Swiper>
  );
}
