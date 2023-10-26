import React from "react";
import slider from "../../assets/images/slider.png";
import Title from "../Title/Title";
import styles from "./style.module.scss";
import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

export const Slider = () => {
  return (
    <div>
      <Title  text="Top News" />

      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className={`mySwiper ${styles.container}`}
        >
          <SwiperSlide>
            <div className={styles.sliderDiv}>
              <div>
                <img src={slider} alt="" />
              </div>
              <div className={styles.title}>
                <h5>
                  A Plan to Rebuild the Bus Terminal Everyone Loves to Hate
                </h5>
                <span>1h ago · by Troy Corlson</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.sliderDiv}>
              <div>
                <img src={slider} alt="" />
              </div>
              <div className={styles.title}>
                <h5>
                  A Plan to Rebuild the Bus Terminal Everyone Loves to Hate
                </h5>
                <span>1h ago · by Troy Corlson</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.sliderDiv}>
              <div>
                <img src={slider} alt="" />
              </div>
              <div className={styles.title}>
                <h5>
                  A Plan to Rebuild the Bus Terminal Everyone Loves to Hate
                </h5>
                <span>1h ago · by Troy Corlson</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.sliderDiv}>
              <div>
                <img src={slider} alt="" />
              </div>
              <div className={styles.title}>
                <h5>
                  A Plan to Rebuild the Bus Terminal Everyone Loves to Hate
                </h5>
                <span>1h ago · by Troy Corlson</span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* <div className={styles.sliderDiv}>
          <div>
            <img src={slider} alt="" />
          </div>
          <div className={styles.title}>
            <h5>A Plan to Rebuild the Bus Terminal Everyone Loves to Hate</h5>
            <span>1h ago · by Troy Corlson</span>
          </div>
        </div>
        <div className={styles.sliderDiv}>
          <div>
            <img src={slider} alt="" />
          </div>
          <div className={styles.title}>
            <h5>A Plan to Rebuild the Bus Terminal Everyone Loves to Hate</h5>
            <span>1h ago · by Troy Corlson</span>
          </div>
        </div> */}
      </div>
    </div>
  );
};
