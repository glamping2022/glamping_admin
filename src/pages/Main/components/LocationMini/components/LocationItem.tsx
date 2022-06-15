import './LocationItem.scss';

import React from 'react';

import { Button, Card } from 'antd';
import { Link } from 'react-router-dom';

import config from '../../../../../settings/config';

const { Meta } = Card;

interface locationCardProps {
  _id: string;
  title: string;
  description: string;
  region: string;
  square: number;
  image: Array<string> | [];
}

const LocationItem: React.FC<locationCardProps> = ({ title, square, image, _id, region }) => {
  const cardImage = config.apiUrl + '/uploads/' + image[0];

  return (
    <Link to={`/locations/${_id}`}>
      <Card
        className='item__card location-item__card'
        style={{ width: 320 }}
        cover={<img alt='Not found' src={cardImage} className='item__location-img' />}
      >
        <Meta className='item__title' title={title} />
        <p className='item__square'>{square} соток</p>
        <p className='item__place'>{region}</p>
        <Button className='location__button' type='primary'>
          Подробнее
        </Button>
      </Card>
    </Link>
  );
};

export default LocationItem;
