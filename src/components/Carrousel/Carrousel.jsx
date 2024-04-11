// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { IconButton } from "@mui/material";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./carrousel.css";

import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function Carrousel() {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        pagination={{
          clickable: true,
        }}
        simulateTouch={false}
        navigation={true}
        modules={[Pagination, Navigation]}
        autoplay={{ delay: 1000 }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://hips.hearstapps.com/vidthumb/images/1366-2000-65eaf3b90a802.jpeg"
            alt=""
          />
          <div className="slide-text">
            <h2>Kung Fu Panda 4</h2>
            <p>Lorem ipsum dolor sit amet.</p>
            <IconButton size="small" >
              <RemoveRedEyeIcon /> Show More
            </IconButton>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://image.tmdb.org/t/p/original/z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg"
            alt=""
          />

          <div className="slide-text">
            <h2>Godzilla x Kong</h2>
            <p>Lorem ipsum dolor sit amet.</p>
            <IconButton size="small" >
              <RemoveRedEyeIcon /> Show More
            </IconButton>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://espaciocinefilo.com/wp-content/uploads/2023/12/Poster-oficial-Madame-Web.jpg"
            alt=""
          />
          <div className="slide-text">
            <h2>Madame Web</h2>
            <p>Lorem ipsum dolor sit amet.</p>
            <IconButton size="small">
              <RemoveRedEyeIcon /> Show More
            </IconButton>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
