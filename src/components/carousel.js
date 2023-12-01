import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import Box from '@mui/joy/Box'

import { StudentSlide } from './student-slide'

export const Carousel = ({students}) => {

  return (
      <Swiper navigation={true} modules={[ Navigation]}>
        {
          students.map((student) => (
            <SwiperSlide style={{maxWidth:'1000px', display: "flex", justifyContent: "center", alightItems: "center"}}>
              <StudentSlide student={student}/>
            </SwiperSlide>
          ))
        }
      </Swiper>
  );
}