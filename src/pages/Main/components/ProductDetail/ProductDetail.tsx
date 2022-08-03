import './ProductDetail.scss';

import React, { useEffect } from 'react';

import { Col, Row } from 'antd';

import GoBack from '../../../../components/Buttons/GoBack/GoBack';
import { useActions } from '../../../../hooks/useAction';
import { useTypedSelectorHook } from '../../../../hooks/useTypedSelector';
import ProductDetailDescription from './components/ProductDetailDescription/ProductDetailDescription';
import ProductDetailGallery from './components/ProductDetailGallery/ProductDetailGallery';

const ProductDetail: React.FC = (props: any) => {
  const idCurrentProduct = props.match.params.id;
  const { currentProduct } = useTypedSelectorHook(state => state.products);
  const { fetchCurrentProduct } = useActions();

  useEffect(() => {
    fetchCurrentProduct(idCurrentProduct);
  }, [idCurrentProduct]);

  if (Object.keys(currentProduct).length === 0) return <></>;

  return (
    <div className='container'>
      <div className='wrapper-top product-wrap'>
        <Row className='product__detail-row'>
          <Col className='product__detail-col' flex='45%'>
            <ProductDetailDescription
              title={currentProduct.title}
              price={currentProduct.price}
              description={currentProduct.description}
              category={currentProduct.categoryId?.title}
              season={currentProduct.season}
              roominess={currentProduct.roominess}
              factory={currentProduct.factoryId?.title}
              productId={idCurrentProduct}
            />
          </Col>
          <Col className='product__detail-img' flex='55%'>
            <ProductDetailGallery images={currentProduct.image ? currentProduct.image : []} />
          </Col>
        </Row>
      </div>
      <div style={{ margin: '20px 0 20px 30px' }}>
        <GoBack />
      </div>
    </div>
  );
};

export default ProductDetail;
