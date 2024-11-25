'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/pagination';

import { EffectFade, Navigation, Pagination } from 'swiper/modules';

export function HeaderHeroSlider() {
    return (
        <Swiper
        modules={[EffectFade, Navigation, Pagination]} effect="fade"
        pagination={{ clickable: true }}

            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 1000, disableOnInteraction: true }}
            loop={true}
            className='w-full h-full'
        >
            <SwiperSlide><div className='slider slider1'/></SwiperSlide>
            <SwiperSlide><div className='slider slider2'/></SwiperSlide>
        </Swiper>
    )
}