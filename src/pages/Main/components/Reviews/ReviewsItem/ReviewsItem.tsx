import './ReviewsItem.scss';

import React from 'react';

import {
  Button,
  Card,
} from 'antd';
import { Link } from 'react-router-dom';

const { Meta } = Card;

interface ReviewsCardProps {
  _id: string;
  pros: string;
  cons: string;
  review: string;
}

const ReviewsItem: React.FC<ReviewsCardProps> = ({ pros, cons, review, _id }) => {
    return (
        <Link to={`/reviews/${_id}`}>
            <Card
                className='item__card review-item__card'
                style={{ width: 320 }}
            >
            <p className='item__square'>{pros} </p>
            <p className='item__square'>{cons} </p>
            <p className='item__place'>{review} </p>
            <Button className='review__button' type='primary'>
                Опубликовать
            </Button>
            </Card>
        </Link>
    );
};

export default ReviewsItem;
