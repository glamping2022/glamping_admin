import './ApplicationProduct.scss';

import React from 'react';

import {
  Button,
  Card,
} from 'antd';
import { Link } from 'react-router-dom';

import { IProduct } from '../../../../store/types/productsTypes';
import { IUser } from '../../../../store/types/users';

const { Meta } = Card;
interface ApplicationProductCardProps {
  _id: string;
  poductId: IProduct;
  userId: IUser;
}

const ApplicationProductItem: React.FC<ApplicationProductCardProps> = ({ poductId, userId, _id }) => {
  const clickHandler: any = () => {
    console.log('clicked for investor');
  };

  return (
    <Link to={`/locations/${_id}`}>
      <Card
        className='item__card location-item__card'
        style={{ width: 320 }}
      >
        <Meta className='item__title' />
        <p className='item__square'>{userId}</p>
        <p className='item__place'>{poductId}</p>
        <Button className='location__button' type='primary'>
          Подробнее
        </Button>
      </Card>
    </Link>
  );
};

export default ApplicationProductItem;
