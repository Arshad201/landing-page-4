import "./Slider.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';

import startIcon from '../../assets/icons/star.svg';
import behanceLogo from '../../assets/icons/behance-logo.svg';
import previous from '../../assets/icons/previous2.svg';
import next from '../../assets/icons/next2.svg';

const Slider =()=>{

  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="testimonial-carousel mySwiper">
        <SwiperSlide className='slides'>
            <div className="slide-header">
                <h3 className="customer-name">Justin Alins</h3>
                <p className="role">Product Designer</p>
            </div>
            <div className="slide-body">
                <p className="review-text">“Really Jobfind is the best platform to get any kind of job, aspecially their support was awesome, They have tried to level best to give best support of new candidate.”</p>
                <div className="ratings">
                    <img src={startIcon} alt="star" />
                    <img src={startIcon} alt="star" />
                    <img src={startIcon} alt="star" />
                    <img src={startIcon} alt="star" />
                    <img src={startIcon} alt="star" />
                </div>
            </div>
            <div className="slide-footer">
                <img src={behanceLogo} alt="behance" />
            </div>
        </SwiperSlide>
        <SwiperSlide className='slides'>
            <div className="slide-header">
                <h3 className="customer-name">Justin Alins</h3>
                <p className="role">Product Designer</p>
            </div>
            <div className="slide-body">
                <p className="review-text">“Really Jobfind is the best platform to get any kind of job, aspecially their support was awesome, They have tried to level best to give best support of new candidate.”</p>
                <div className="ratings">
                    <img src={startIcon} alt="star" />
                    <img src={startIcon} alt="star" />
                    <img src={startIcon} alt="star" />
                    <img src={startIcon} alt="star" />
                    <img src={startIcon} alt="star" />
                </div>
            </div>
            <div className="slide-footer">
                <img src={behanceLogo} alt="behance" />
            </div>
        </SwiperSlide>
        <SwiperSlide className='slides'>
            <div className="slide-header">
                <h3 className="customer-name">Justin Alins</h3>
                <p className="role">Product Designer</p>
            </div>
            <div className="slide-body">
                <p className="review-text">“Really Jobfind is the best platform to get any kind of job, aspecially their support was awesome, They have tried to level best to give best support of new candidate.”</p>
                <div className="ratings">
                    <img src={startIcon} alt="star" />
                    <img src={startIcon} alt="star" />
                    <img src={startIcon} alt="star" />
                    <img src={startIcon} alt="star" />
                    <img src={startIcon} alt="star" />
                </div>
            </div>
            <div className="slide-footer">
                <img src={behanceLogo} alt="behance" />
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
