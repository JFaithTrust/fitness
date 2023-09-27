import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

import { ExerciseCard, BodyPart} from '../components'

const HorizontalCards = ({data, bodyParts, setBodyPart, bodyPart}) => {
  console.log(data);
  return (
  <div style={{ width: '1280px', margin: 'auto'}}> 
    <Swiper
        slidesPerView={3}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {data.map((item) => (
            <SwiperSlide key={item.id || item} m={'0 40px'}>
              {bodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item} /> }
            </SwiperSlide>
        ))}
      </Swiper>
  </div>
  )
}

export default HorizontalCards