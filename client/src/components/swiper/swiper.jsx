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

  


  let yes = data?.itemById.image || []

  console.log(yes)

//  const itemData = [];

// yes?.forEach((item)=>{
 
// // const newData = JSON.parse(item.image)
// // itemData.push(newData)




// })

const itemData = yes.map(jsonString => {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.error('Error parsing JSON:', error);
    // Optionally handle the error or skip the item
    return null; // Return null for failed parsing
  }
}).filter(item => item !== null); // Filter out items that failed parsing

console.log(itemData);







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
        
        {itemData && itemData.map((itemData, index) => (
            <SwiperSlide key={index}>
              <img src={itemData} alt={`Slide ${index + 1}`} className='image-h'/>
            </SwiperSlide>
          ))}
        
      </Swiper>
    </>
  );
}
