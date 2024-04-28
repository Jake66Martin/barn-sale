import { Swiper, SwiperSlide } from "swiper/react";
import { ITEM_ID } from "../../utils/queries";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiper.css";

import { Pagination, Navigation } from "swiper/modules";

export default function Swiping() {
  let { id } = useParams();

  const { loading, error, data } = useQuery(ITEM_ID, {
    variables: { id: id },
  });

  console.log(data?.itemById.image);

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        
        {data?.itemById.image &&
          data.itemById.image.map((imageUrl, index) => (
            <SwiperSlide key={index}>
              <img src={imageUrl} alt={`Slide ${index + 1}`} className='image-h'/>
            </SwiperSlide>
          ))}
        
      </Swiper>
    </>
  );
}
