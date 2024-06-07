import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';



// import required modules
import { Autoplay,FreeMode } from 'swiper/modules';
import styled from 'styled-components';
const AcoladsSlider = () => {
  return (
    <Wrapper>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        modules={[FreeMode,Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          375: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          425: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <a href="https://www.asialaw.com/Firm/asp-advocates/Profile/1295#undefined" target="_blank">
            <div className="card">
              <div className="image">
                <img src="/images/asialaw.png" alt="asialaw.png" />
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://www.legal500.com/firms/34410-asp-advocates/35009-new-delhi-india/" target="_blank">
            <div className="card">
              <div className="image">
                <img src="/images/legal500.png" alt="legal500.png" />
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://www.forbesindia.com/legalpowerlist2021/winners.php" target="_blank">
            <div className="card forbes">
              <div className="image">
                <img src="/images/forbes2020.png" alt="forbes2021.png" />
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://www.forbesindia.com/legalpowerlist2022/winners-2022.php" target="_blank">
            <div className="card forbes">
              <div className="image">
                <img src="/images/forbes.png" alt="forbes22.png" />
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://www.forbesindia.com/legalpowerlist2022/winners-2022.php" target="_blank">
            <div className="card forbes2022">
              <div className="image">
                <img src="/images/forbes2022.png" alt="" />
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://www.legalpowerlists.com/winners-2023" target="_blank">
            <div className="card forbes2023">
              <div className="image">
                <img src="/images/forbes2023.png" alt="forbes2023.png" />
              </div>
            </div>
          </a>
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: calc(100% - 50px);
  padding: 0 50px;
 .swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
}

.swiper-slide img {
  display: block;
  width: 70%;
  height: 100%;
  object-fit: cover;
}
.forbes2022 img{
  width: 50%;
}
.forbes2023 img{
  width: 70%;
}
.card{
  display: flex;
  justify-content: center;
  align-items: center;
  .image{
    display: flex;
  justify-content: center;
  align-items: center;
  }
}
@media only screen and (max-width: 426px){
  width: 100%;
  padding: 0 20px;
}
`;
export default AcoladsSlider;
