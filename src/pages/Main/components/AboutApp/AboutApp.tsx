import './AboutApp.scss';

import React, { useEffect } from 'react';

import {
  Col,
  Input,
  Layout,
  Pagination,
  Row,
} from 'antd';

import GoBack from '../../../../components/Buttons/GoBack/GoBack';
import { useActions } from '../../../../hooks/useAction';
import { useTypedSelectorHook } from '../../../../hooks/useTypedSelector';
import LocationItem from '../../../Main/components/LocationMini/components/LocationItem';

const { Content } = Layout;

const AboutApp: React.FC = () => {
  const { user } = useTypedSelectorHook(state => state.users);
  document.documentElement.scrollTop = 0;
  const { locations, pages } = useTypedSelectorHook(state => state.locations);
  const { fetchLocations } = useActions();
  const { fetchNextLocationPages } = useActions();

  useEffect(() => {
    fetchLocations();
  }, []);

  const onChange = (pageNumber: number) => {
    fetchNextLocationPages(pageNumber - 1);
  };

  const totalPages = Number(pages) * 10;
  const noPages = totalPages < 1;

  const locationsList = locations.map(location => {
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
  
  return (
    <div id="container"> 
      <div className="tabs">
        <Input className="tab" id="tab1" type="radio" name="tabs"/> 
          <label htmlFor="tab1">Новые заявки</label> 
        <Input className="tab" id="tab2" type="radio" name="tabs"/> 
          <label htmlFor="tab2">Глэмпинги</label> 
        <Input className="tab" id="tab3" type="radio" name="tabs"/> 
          <label htmlFor="tab3">Магазин</label> 
        <Input className="tab" id="tab4" type="radio" name="tabs"/> 
          <label htmlFor="tab4">Инвесторы</label>
        <Input className="tab" id="tab5" type="radio" name="tabs"/> 
          <label htmlFor="tab5">Потенциальные инвесторы</label> 
        <section id="content1"> 
          <div className="InSide">
            <Input className="tab" type="radio" name="tab-btn" id="tab-btn-1" value=""/>
              <label htmlFor="tab-btn-1">Заявки на создание глэмпинга</label>
            <Input className="tab" type="radio" name="tab-btn" id="tab-btn-2" value=""/>
              <label htmlFor="tab-btn-2">Заявки на бронирование питчи</label>
            <Input className="tab" type="radio" name="tab-btn" id="tab-btn-3" value=""/>
              <label htmlFor="tab-btn-3">Заявки на создание размешения(sharing)</label>
            <Input className="tab" type="radio" name="tab-btn" id="tab-btn-4" value=""/>
              <label htmlFor="tab-btn-4">Заявки на продажу модуля</label>
            <Input className="tab" type="radio" name="tab-btn" id="tab-btn-5" value=""/>
              <label htmlFor="tab-btn-5">Заявки на покупку модуля</label>
            <Input className="tab" type="radio" name="tab-btn" id="tab-btn-6" value=""/>
              <label htmlFor="tab-btn-6">Комментарии / Отзывы</label>
            <div id="content-1">
              <Layout className='applicationGlamping'>
                <Content>
                  <Row >{locationsList}</Row>
                  <div >
                    {noPages ? <></> : <Pagination total={totalPages} onChange={onChange} />}
                  </div>
                  <div className='button-back'>
                    <GoBack />
                  </div>
                </Content>
              </Layout>
            </div>
            <div id="content-2">
              Заявки на бронирование питчи
            </div>
            <div id="content-3">
              Заявки на создание размешения(sharing)
            </div>
            <div id="content-4">
              Заявки на продажу модуля
            </div>
            <div id="content-5">
              Заявки на покупку модуля
            </div>
            <div id="content-6">
              Комментарии
            </div>
          </div>
        </section>  
        <section id="content2">
          <p>Описание2</p> 
        </section>  
        <section id="content3"> 
          <p>Описание3</p> 
        </section>  
        <section id="content4"> 
          <p>Описание4</p> 
        </section>
        <section id="content5"> 
          <p>Описание5</p> 
        </section>  
      </div> 
    </div>
  );
};

export default AboutApp;
