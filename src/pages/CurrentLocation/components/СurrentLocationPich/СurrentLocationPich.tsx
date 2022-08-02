import './СurrentLocationPich.scss';

import React from 'react';

import { Button, Card } from 'antd';
import { Link } from 'react-router-dom';

import config from '../../../../settings/config';
import Paragraph from 'antd/lib/typography/Paragraph';

const { Meta } = Card;

interface IPichesCardProps {
  _id: string;
  title: string;
  rent: string;
  image: Array<string> | [];
  number: string;
}

const CurrentLocationPich: React.FC<IPichesCardProps> = ({ _id, rent, image, number }) => {
  const cardImage = config.apiUrl + '/uploads/' + image[0];

  return (
    <Link to={`/pich/${_id}`}>
      <Card
        hoverable
        cover={<img alt='pich' src={cardImage} style={{ height: 125, width: 150 }} />}
        style={{ width: 320, height: 125, display: 'flex' }}
      >
        <Meta
          title={'# ' + number}
          style={{ fontWeight: 500, fontSize: '18px', lineHeight: '24px', marginBottom: 4, padding: 0 }}
        />
        <Paragraph style={{ fontSize: '16px', lineHeight: '20px', marginBottom: 12 }}>{rent} ₸ / ночь</Paragraph>
        <Button className='pich-item-button'>Бронировать</Button>
      </Card>
    </Link>
  );
};

export default CurrentLocationPich;
