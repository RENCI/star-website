import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Keyboard, Navigation, Pagination } from 'swiper/modules';

import { StudentSlide, MobileSlide } from './student-slide'

export const Carousel = ({students}) => {

  return (
      <Swiper 
        modules={[ Keyboard, Navigation, Pagination]}
        keyboard={{
          enabled: true,
        }}
        // navigation={{
        //   enabled: true,
        // }}
        pagination={{
          clickable: true,
        }}
        grabCursor={true}
        slidesPerView={2}
        centeredSlides={true}
        spaceBetween={60}
        loop={true}
      >
        {
          students.map((student) => (
            <SwiperSlide key={student.name}>
              <StudentSlide student={student}/>
            </SwiperSlide>
          ))
        }
      </Swiper>
  );
}

export const MobileCarousel = ({students}) => {

  return (
    <Swiper
      modules={[ Keyboard, Navigation, Pagination]}
      keyboard={{
        enabled: true,
      }}
      pagination={{
        clickable: true,
      }}
      grabCursor={true}
      slidesPerView={1}
      centeredSlides={true}
      spaceBetween={60}
      loop={true}
    >
      {
        students.map((student) => (
          <SwiperSlide key={student.name}>
            <MobileSlide student={student}/>
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}