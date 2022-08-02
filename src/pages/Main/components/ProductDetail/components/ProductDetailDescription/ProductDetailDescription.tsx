import './ProductDetailDescription.scss';

import React from 'react';

import { Button, Divider, Typography } from 'antd';
import { useHistory } from 'react-router-dom';

import { useActions } from '../../../../../../hooks/useAction';
import { useTypedSelectorHook } from '../../../../../../hooks/useTypedSelector';

const { Title, Paragraph } = Typography;

interface ICurrentProductProps {
  title?: string;
  price?: string;
  description?: string;
  category?: string;
  season?: string;
  roominess?: number;
  factory?: string;
  productId: string;
}

const ProductDetailDescription: React.FC<ICurrentProductProps> = ({
  title,
  productId,
  price,
  description,
  category,
  season,
  roominess,
  factory,
}) => {
  const { user } = useTypedSelectorHook(state => state.users);

  const { createProductApplication } = useActions();
  const history = useHistory();
  const appProduct = {
    productId: productId,
  };
  const handleClick = async () => {
    if (user) {
      await createProductApplication(appProduct);
      history.push('/store/[]');
    }
  };
  return (
    <div className='product-detail-description'>
      <Title className='product__title'>{title}</Title>
      <p className='product__price'>от {price?.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')} ₸ / шт</p>
      <p className='product__desc'>{description}</p>
      <div className='product__options'>
        <div style={{ marginRight: '50px' }}>
          <Paragraph style={{ marginBottom: '12px', color: '#1A1A1A' }} className='options'>
            Категория
          </Paragraph>
          <Paragraph style={{ marginBottom: '12px', color: '#1A1A1A' }} className='options'>
            Вместимость
          </Paragraph>
          <Paragraph style={{ marginBottom: '12px', color: '#1A1A1A' }} className='options'>
            Сезонность
          </Paragraph>
          <Paragraph style={{ marginBottom: '12px', color: '#1A1A1A' }} className='options'>
            Производитель
          </Paragraph>
        </div>
        <div>
          <Paragraph className='options' style={{ marginBottom: '12px' }}>
            {category === 'Купола' ? <span className='icon-triangle'>Купол</span> : null}
            {category === 'Автодома' ? <span className='icon-car'>Авто</span> : null}
            {category === 'Тенты' ? <span className='icon-share'>Полимер</span> : null}
            {category === 'Юрты' ? <span className='icon-metal'>Металл</span> : null}
          </Paragraph>
          <Paragraph className='options' style={{ marginBottom: 12 }}>
            {roominess === 3 ? <span className='icon-bed'>3</span> : null}
            {roominess === 4 ? <span className='icon-bed'>4</span> : null}
            {roominess === 5 ? <span className='icon-bed'>5</span> : null}
            {roominess === 6 ? <span className='icon-bed'>6</span> : null}
            {roominess === 7 ? <span className='icon-bed'>7</span> : null}
            {roominess === 8 ? <span className='icon-bed'>8</span> : null}
            {roominess === 9 ? <span className='icon-bed'>9</span> : null}
          </Paragraph>
          <Paragraph className='options' style={{ marginBottom: '12px' }}>
            {season === 'summer' ? <span className='icon-sun'>Лето</span> : null}
            {season === 'winter' ? <span className='icon-snowflake'>Зима</span> : null}
            {season === 'all' ? <span className='icon-all'>Круглый год</span> : null}
          </Paragraph>
          <span className='options'>{factory}</span>
        </div>
      </div>
      <div style={{ marginTop: 32, marginBottom: 32, maxWidth: 500 }}>
        <Divider />
      </div>
      <div className='link'>
        <Button className='order__link' onClick={handleClick}>
          Подать заявку
        </Button>
      </div>
    </div>
  );
};

export default ProductDetailDescription;
