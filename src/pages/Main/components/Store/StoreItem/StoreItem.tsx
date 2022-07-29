import './StoreItem.scss';

import React from 'react';

import {
  Button,
  Card,
} from 'antd';
import { Link } from 'react-router-dom';

import config from '../../../../../settings/config';

const { Meta } = Card;
interface IModuleCardProps {
  _id: string;
  title: string;
  price: string;
  rating: number;
  image: Array<string> | [];
  category: string;
  season: string;
  roominess: number;
}

const StoreItem: React.FC<IModuleCardProps> = ({ title, price, image, _id, category, season, roominess }) => {
  const cardImage = config.apiUrl + '/uploads/' + image[0];
  const clickHandler: any = () => {
    console.log('clicked for investor');
  };

  return (
    <Link to={`/storedetail/${_id}`}>
      <Card className='item__card' cover={<img alt='product' src={cardImage} style={{ height: 200 }} />} hoverable>
        <Meta title={title} />
        {category === 'Купола' ? <span className='icon-triangle'>Купол</span> : null}
        {category === 'Автодома' ? <span className='icon-car'>Авто</span> : null}
        {category === 'Тенты' ? <span className='icon-share'>Полимер</span> : null}
        {category === 'Юрты' ? <span className='icon-metal'>Металл</span> : null}
        {season === 'summer' ? <span className='icon-sun'>Лето</span> : null}
        {season === 'winter' ? <span className='icon-snowflake'>Зима</span> : null}
        {season === 'all' ? <span className='icon-all'>Круглый год</span> : null}
        {roominess === 3 ? <span className='icon-bed'>3</span> : null}
        {roominess === 4 ? <span className='icon-bed'>4</span> : null}
        {roominess === 5 ? <span className='icon-bed'>5</span> : null}
        {roominess === 6 ? <span className='icon-bed'>6</span> : null}
        {roominess === 7 ? <span className='icon-bed'>7</span> : null}
        {roominess === 8 ? <span className='icon-bed'>8</span> : null}
        {roominess === 9 ? <span className='icon-bed'>9</span> : null}
        <p>{price.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')} ₸ / шт</p>
        <Button className='item__button' onClick={clickHandler}>
          Заказать
        </Button>
      </Card>
      
    </Link>
  );
};

export default StoreItem;
