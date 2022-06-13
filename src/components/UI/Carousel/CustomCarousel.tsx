import './CustomCarousel.scss';

import React from 'react';

import { Carousel } from 'antd';

import NextArrow from './Items/NextArrow';
import PrevArrow from './Items/PrevArrow';
import Paragraph from 'antd/lib/typography/Paragraph';

const CustomCarousel: React.FC = () => {
  return (
    <section className='carousel'>
      <Carousel autoplay autoplaySpeed={5000} draggable arrows nextArrow={<NextArrow />} prevArrow={<PrevArrow />}>
        <div className='contentStyle first-slide'>
          <div className='content-slider'>
            <Paragraph className='booking-region'>Туркестан, Туркестанская обл.</Paragraph>
            <Paragraph className='booking-name'>Деревня «Кочевники»</Paragraph>
          </div>
        </div>

        <div className='contentStyle second-slide'>
          <div className='content-slider'>
            <Paragraph className='booking-region'>Туркестан, Туркестанская обл.</Paragraph>
            <Paragraph className='booking-name'>Mega dacha</Paragraph>
          </div>
        </div>

        <div className='contentStyle third-slide'>
          <div className='content-slider'>
            <Paragraph className='booking-region'>Туркестан, Туркестанская обл.</Paragraph>
            <Paragraph className='booking-name'>Apple farm</Paragraph>
          </div>
        </div>
      </Carousel>
    </section>
  );
};

export default CustomCarousel;
