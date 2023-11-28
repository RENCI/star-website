import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Box from '@mui/joy/Box'
import Card from '@mui/joy/Card'
import Typography from '@mui/joy/Typography';

// import required modules
import { Navigation } from 'swiper/modules';

const StudentSlide = ({student}) => {
  return (
    <Box sx={{maxHeight: '300px', maxWidth: '600px'}}>
      <Card>
        <Typography fontSize="xl" fontWeight="lg">
          {student.student_name}
        </Typography>
        <Typography>{student.project_description}</Typography>
      </Card>
    </Box>
  )
}


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