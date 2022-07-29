import './CustomFooter.scss';

import React from 'react';

import { Col, Layout, List, Row } from 'antd';
import { Link } from 'react-router-dom';

import glamping_icon from '../../../assets/icons/glamping_footer.svg';
import facebook_icon from '../../../assets/icons/i-facebook.svg';
import instagram_icon from '../../../assets/icons/i-insta.svg';
import mail_icon from '../../../assets/icons/i-mail.svg';

const { Footer } = Layout;

const CustomFooter: React.FC = () => {
  return (
    <Footer>
      <div className='footer-container'>
        <Row className='footer-elements'>
          <Col className='footer-container__item links__list' span={4}>
            <List split={false}>
              <List.Item>
                <a href='https://glamping.kz/' target='_blank' className='footer-container__text footer__hover'>
                  Глэмпинг
                </a>
              </List.Item>
              <List.Item>
                <Link to='/store/[]' className='footer-container__text footer__hover'>
                  Магазин
                </Link>
              </List.Item>
              <List.Item>
                <Link to='/locations-map' className='footer-container__text footer__hover'>
                  Сдать землю
                </Link>
              </List.Item>
            </List>
          </Col>
          <Col className='footer-container__item' span={10}>
            <div className='socials'>
              <a href='https://www.instagram.com/' className='socials__link'>
                <img src={instagram_icon} />
              </a>
              <a href='https://www.facebook.com' className='socials__link'>
                <img src={facebook_icon} />
              </a>
              <a href='mailto:sattyarba@gmail.com' className='socials__link'>
                <img src={mail_icon} />
              </a>
            </div>
            <List split={false}>
              <List.Item>
                <a href='tel: +7 (707) 811 93 18' className='footer-container__text footer-container__text_tel'>
                  +7 (707) 811 93 18
                </a>
              </List.Item>
              <List.Item>
                <a
                  href='https://www.google.kz/maps/place/%D1%83%D0%BB%D0%B8%D1%86%D0%B0+%D0%96%D0%B8%D0%B1%D0%B5%D0%BA+%D0%96%D0%BE%D0%BB%D1%8B+135%2F10%D0%90,+%D0%90%D0%BB%D0%BC%D0%B0%D1%82%D1%8B+050000/@43.2611278,76.9272461,17z/data=!3m1!4b1!4m5!3m4!1s0x38836eaf86138e07:0x9e774cbb69531c73!8m2!3d43.2611278!4d76.9294401?hl=ru'
                  className='footer-container__text_addr footer__hover'
                >
                  РК, г. Алматы, проспект Жибек Жолы, 135/10А, офис 514
                </a>
              </List.Item>
            </List>
          </Col>
          <Col className='footer-container__item' span={8}>
            <List split={false}>
              <List.Item>
                <img src={glamping_icon} style={{ marginBottom: 50 }} />
              </List.Item>
              <List.Item>
                <p className='footer-container__text_copy'>© 2021 All rights reserved. Все права защищены.</p>
              </List.Item>
            </List>
          </Col>
        </Row>
      </div>
    </Footer>
  );
};

export default CustomFooter;
