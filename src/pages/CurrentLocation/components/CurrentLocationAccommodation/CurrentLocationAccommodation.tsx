import React from 'react';

import { Button, Card, Typography } from 'antd';
import { Link } from 'react-router-dom';

import config from '../../../../settings/config';
import './CurrentLocationAccommodation.scss';

const { Meta } = Card;
const { Paragraph } = Typography;

interface IAccommodationCardProps {
  _id: string;
  title: string;
  rent: string;
  image: Array<string> | [];
}

const CurrentLocationAccommodation: React.FC<IAccommodationCardProps> = ({ title, rent, image, _id }) => {
  const cardImage = config.apiUrl + '/uploads/' + image[0];

  return (
    <Link to={`/currentaccommodations/${_id}`}>
      <Card style={{ width: 300 }} cover={<img alt='accommodation' src={cardImage} style={{ height: 200 }} />}>
        <Meta title={title} style={{ fontWeight: 500, fontSize: '18px', lineHeight: '24px', textAlign: 'center' }} />
        <Paragraph style={{ fontSize: '16px', lineHeight: '24px', marginBottom: 12, textAlign: 'center' }}>
          {rent} ₸ / ночь
        </Paragraph>
        {/*<Button className='reserve-btn' style={{ marginBottom: 24 }}>*/}
        {/*  Бронировать*/}
        {/*</Button>*/}
      </Card>
    </Link>
  );
};

export default CurrentLocationAccommodation;
