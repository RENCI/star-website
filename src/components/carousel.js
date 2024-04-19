import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Keyboard, Navigation } from 'swiper/modules';

import { StudentSlide } from './student-slide'

export const Carousel = ({students}) => {

  return (
      <Swiper 
        navigation={true} 
        modules={[ Keyboard, Navigation]}
        keyboard={{
          enabled: true,
        }}
        slidesPerView={1}
        spaceBetween={30}
        style={{
          height: '50%',
          width: '100%',
        }}
        parallax
      >
        {
          students.map((student) => (
            <SwiperSlide key={student.name} style={{ 
              display: "flex", 
              justifyContent: "center", 
              alightItems: "center",
            }}>
              <StudentSlide student={student}/>
            </SwiperSlide>
          ))
        }
      </Swiper>
  );
}