import './AboutApp.scss';

import React, { useEffect } from 'react';

import {
  Col,
  Input,
  Layout,
  Row,
} from 'antd';

import { useActions } from '../../../../hooks/useAction';
import { useTypedSelectorHook } from '../../../../hooks/useTypedSelector';
import LocationItem from '../../../Main/components/LocationMini/components/LocationItem';
import StoreItem from '../Store/StoreItem/StoreItem';

const { Content } = Layout;

const AboutApp: React.FC = () => {
  const { user } = useTypedSelectorHook(state => state.users);
  document.documentElement.scrollTop = 0;
  const { locations} = useTypedSelectorHook(state => state.locations);
  const { products} = useTypedSelectorHook(state => state.products);
  const { reviews } = useTypedSelectorHook(state => state.reviews);
  const { applicationsProducts } = useTypedSelectorHook(state => state.productApplications);

  const { fetchAllLocations } = useActions();
  const { fetchAllProducts } = useActions();
  const { fetchAllReviews } = useActions();
  const { fetchAllAppProducts } = useActions();

  useEffect(() => {
    fetchAllProducts();
    fetchAllLocations();
    fetchAllReviews();
    fetchAllAppProducts();
  }, []);

  console.log(reviews);
  
  
//location
  // const onChangeLocation = (pageNumber: number) => {
  //   fetchNextLocationPages(pageNumber - 1);
  // };

  // const totalPages = Number(pages) * 10;
  // const noPages = totalPages < 1;
  const newAppLocations = () => {
    const AppLocations = locations.filter(location => {
      return location.published === false;
    });
    return AppLocations;
  };
  const publishLocations = () => {
    const Locations = locations.filter(location => {
      return location.published === true;
    });
    return Locations;
  };

  const AppLocationsList = newAppLocations().map(location => {
    return (
      <Col key={location._id} className='gutter-row'>
        <LocationItem
          _id={location._id}
          title={location.title}
          description={location.description}
          square={location.square}
          image={location.image}
          region={location.region}
        />
      </Col>
    );
  });

  const locationsList = publishLocations().map(location => {
    return (
      <Col key={location._id} className='gutter-row'>
        <LocationItem
          _id={location._id}
          title={location.title}
          description={location.description}
          square={location.square}
          image={location.image}
          region={location.region}
        />
      </Col>
    );
  });

  //product
  const newAppProducts = () => {
    const AppProducts = products.filter(product => {
      return product.published === false;
    });
    return AppProducts;
  };
  
  const publishProducts = () => {
    const publishedProducts = products.filter(product => {
      return product.published === true;
    });
    return publishedProducts;
  };

  const newProductsList = newAppProducts().map(product => {
    return (
      <Col key={product._id} className='gutter-row' style={{ margin: 10 }}>
        <StoreItem
          _id={product._id}
          title={product.title}
          price={product.price}
          rating={5}
          image={product.image}
          category={product.categoryId.title}
          season={product.season}
          roominess={product.roominess}
        />
      </Col>
    );
  });
  
  const publishedProductsList = publishProducts().map(product => {
    return (
      <Col key={product._id} className='gutter-row' style={{ margin: 10 }}>
        <StoreItem
          _id={product._id}
          title={product.title}
          price={product.price}
          rating={5}
          image={product.image}
          category={product.categoryId.title}
          season={product.season}
          roominess={product.roominess}
        />
      </Col>
    );
  });

  //applicationsProducts
  //product
  const newApplicationProducts = () => {
    const AppProducts = applicationsProducts.filter(product => {
      return product.published === false;
    });
    return AppProducts;
  };
  
  const publishApplicationProducts = () => {
    const publishedProducts = applicationsProducts.filter(product => {
      return product.published === true;
    });
    return publishedProducts;
  };

  const newApplicationProductsList = newAppProducts().map(product => {
    return (
      <Col key={product._id} className='gutter-row' style={{ margin: 10 }}>
        <StoreItem
          _id={product._id}
          title={product.title}
          price={product.price}
          rating={5}
          image={product.image}
          category={product.categoryId.title}
          season={product.season}
          roominess={product.roominess}
        />
      </Col>
    );
  });
  
  const publishedApplicationProductsList = publishProducts().map(product => {
    return (
      <Col key={product._id} className='gutter-row' style={{ margin: 10 }}>
        <StoreItem
          _id={product._id}
          title={product.title}
          price={product.price}
          rating={5}
          image={product.image}
          category={product.categoryId.title}
          season={product.season}
          roominess={product.roominess}
        />
      </Col>
    );
  });

  let test: any = "hello"; 
  test = 23;
  
  return (
    <div id='container'>
      <div className='tabs'>
        <Input className='tab' id='tab1' type='radio' name='tabs' />
        <label htmlFor='tab1'>Новые заявки</label>
        <Input className='tab' id='tab2' type='radio' name='tabs' />
        <label htmlFor='tab2'>Глэмпинги: {publishLocations().length}</label>
        <Input className='tab' id='tab3' type='radio' name='tabs' />
        <label htmlFor='tab3'>Магазин: {publishProducts().length}</label>
        <Input className='tab' id='tab4' type='radio' name='tabs' />
        <label htmlFor='tab4'>Инвесторы</label>
        <Input className='tab' id='tab5' type='radio' name='tabs' />
        <label htmlFor='tab5'>Потенциальные инвесторы</label>
        <section id='content1'>
          <div className='InSide'>
            <Input className='tab' type='radio' name='tab-btn' id='tab-btn-1' value='' />
            <label htmlFor='tab-btn-1'>Заявки на создание глэмпинга: {newAppLocations().length}</label>
            <Input className='tab' type='radio' name='tab-btn' id='tab-btn-2' value='' />
            <label htmlFor='tab-btn-2'>Заявки на бронирование питчи</label>
            <Input className='tab' type='radio' name='tab-btn' id='tab-btn-3' value='' />
            <label htmlFor='tab-btn-3'>Заявки на создание размешения(sharing)</label>
            <Input className='tab' type='radio' name='tab-btn' id='tab-btn-4' value='' />
            <label htmlFor='tab-btn-4'>Заявки на продажу модуля: {newAppProducts().length}</label>
            <Input className='tab' type='radio' name='tab-btn' id='tab-btn-5' value='' />
            <label htmlFor='tab-btn-5'>Заявки на покупку модуля</label>
            <Input className='tab' type='radio' name='tab-btn' id='tab-btn-6' value='' />
            <label htmlFor='tab-btn-6'>Комментарии / Отзывы</label>
            <div id='content-1'>
              <div id='content-1'>
                <Layout className='applicationGlamping'>
                  <Content>
                    <Row>{AppLocationsList}</Row>
                    {/* <div >
                      {noPages ? <></> : <Pagination total={totalPages} onChange={onChange} />}
                    </div> */}
                  </Content>
                </Layout>
              </div> 
            </div>
            <div id='content-2'>Заявки на бронирование питчи</div>
            <div id='content-3'>Заявки на создание размешения(sharing)</div>
            <div id='content-4'>
              <div id='content-1'>
                <Layout className='applicationGlamping'>
              <Content>
                <Row>{newProductsList}</Row>
                {/* <div className='pagination'>
                  {noPagesProduct ? (
                    <></>
                  ) : (
                    <Pagination className='pagination-list' total={totalPagesProduct} onChange={onChange} current={currentPage} />
                  )}
                </div> */}
                {/* <GoBack /> */}
              </Content>
            </Layout>
              </div>
            
            </div>
            <div id='content-5'>Заявки на покупку модуля</div>
            <div id='content-6'>Комментарии</div>
          </div>
        </section>
        <section id='content2'>
          <div id='content-1'>
            <Layout className='applicationGlamping'>
              <Content>
                <Row>{locationsList}</Row>
                {/* <div >
                    {noPages ? <></> : <Pagination total={totalPages} onChange={onChange} />}
                  </div> */}
                  {/* <GoBack /> */}
              </Content>
            </Layout>
          </div>
        </section>
        <section id='content3'>
          <div id='content-1'>
            <Layout className='applicationGlamping'>
              <Content>
                <Row>{publishedProductsList}</Row>
                  {/* <div className='pagination'>
                    {noPagesProduct ? (
                      <></>
                    ) : (
                      <Pagination className='pagination-list' total={totalPagesProduct} onChange={onChange} current={currentPage} />
                    )}
                  </div> */}
                  {/* <GoBack /> */}
              </Content>
            </Layout>      
          </div>
        </section>
        <section id='content4'>
          <p>Описание4</p>
        </section>
        <section id='content5'>
          <p>Описание5</p>
        </section>
      </div>
    </div>
  );
};

export default AboutApp;
