import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Box from '@mui/joy/Box'

import { StudentSlide } from './student-slide'

export const Carousel = ({students}) => {

  return (
    <Box>
      <Swiper navigation={true} modules={[Navigation]}>
        {
          students.map((student)=>(
            <SwiperSlide style={{display: "flex", justifyContent: "center", alightItems: "center"}}>
              <StudentSlide student={student}/>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </Box>
  );
}