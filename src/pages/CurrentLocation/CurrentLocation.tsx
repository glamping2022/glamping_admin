import './CurrentLocation.scss';

import React, { useEffect } from 'react';

import { Col, Pagination, Row } from 'antd';
import Paragraph from 'antd/lib/typography/Paragraph';
import Title from 'antd/lib/typography/Title';

import GoBack from '../../components/Buttons/GoBack/GoBack';
import { useActions } from '../../hooks/useAction';
import { useTypedSelectorHook } from '../../hooks/useTypedSelector';
import CurrentLocationAccommodation from './components/CurrentLocationAccommodation/CurrentLocationAccommodation';
import CurrentLocationDescription from './components/CurrentLocationDescription/CurrentLocationDescription';
import CurrentLocationGallery from './components/CurrentLocationGallery/CurrentLocationGallery';
import CurrentLocationPich from './components/СurrentLocationPich/СurrentLocationPich';

const CurrentLocation: React.FC = (props: any) => {
  const idCurrentLocation = props.match.params.id;
  const { accommodations } = useTypedSelectorHook(state => state.accommodations);
  const { fetchAccommodations } = useActions();
  const { currentLocation } = useTypedSelectorHook(state => state.locations);
  const { fetchCurrentLocation } = useActions();
  const { currentAccommodation } = useTypedSelectorHook(state => state.accommodations);
  const { accommodationReviews, accommodationReviewPages } = useTypedSelectorHook(state => state.reviews);
  const { fetchNextAccommodationReviewPages } = useActions();
  const idCurrentAccommodation = props.match.params.id;

  const { piches } = useTypedSelectorHook(state => state.piches);
  const { fetchPichesByLocationId } = useActions();

  useEffect(() => {
    fetchAccommodations(idCurrentLocation);
    fetchCurrentLocation(idCurrentLocation);
    fetchPichesByLocationId(idCurrentLocation);
  }, [idCurrentLocation]);

  const accommodationsList = accommodations.map(accommodation => {
    return (
      <Col key={accommodation._id} span={6} style={{ marginBottom: 20 }}>
        <CurrentLocationAccommodation
          _id={accommodation._id}
          title={accommodation.title}
          rent={accommodation.rent}
          image={accommodation.image}
        />
      </Col>
    );
  });

  const pichesList = piches.map(pich => {
    return (
      <Col key={pich._id} span={6} style={{ marginBottom: 20 }}>
        <CurrentLocationPich
          key={pich._id}
          _id={pich._id}
          rent={pich.rent}
          title={pich.title}
          image={pich.image}
          number={pich.number}
        />
      </Col>
    );
  });

  return (
    <>
      <div className='container current-location'>
        <div className='wrapper-top '>
          <Row className='current__location-row'>
            <Col flex='50%' className='current__location-description'>
              <CurrentLocationDescription {...currentLocation} />
            </Col>
            <Col flex='50%' className='current__location-img'>
              <CurrentLocationGallery images={currentLocation.image ? currentLocation.image : []} />
            </Col>
          </Row>
        </div>
      </div>
      <div className='wrap'>
        <div className='container'>
          {/*<Title*/}
          {/*  level={2}*/}
          {/*  style={{*/}
          {/*    fontWeight: 500,*/}
          {/*    fontSize: '24px',*/}
          {/*    lineHeight: '28px',*/}
          {/*    color: '#7AB054',*/}
          {/*    padding: '72px 25px 15px',*/}
          {/*  }}*/}
          {/*>*/}
          {/*  Бронирование на территории*/}
          {/*</Title>*/}
          {accommodationsList.length !== 0 ? (
            <Row>
              <Title level={3} style={{ fontWeight: 500, fontSize: '18px', lineHeight: '24px', paddingLeft: 25 }}>
                Размещение
              </Title>
            </Row>
          ) : null}
          <Row className='current-location-card' justify='space-around' gutter={[2, 2]}>
            {accommodationsList}
          </Row>
          {pichesList.length !== 0 ? (
            <Row>
              <Title
                level={3}
                style={{ fontWeight: 500, fontSize: '18px', lineHeight: '24px', paddingLeft: 25, marginTop: 60 }}
              >
                Питчи
              </Title>
            </Row>
          ) : null}
          <Row className='current-location-card' justify='space-around' gutter={[2, 2]}>
            {pichesList}
          </Row>
        </div>
      </div>
      <div className='container wrap-review' style={{ marginBottom: 30 }}>
        <GoBack />
      </div>
    </>
  );
};

export default CurrentLocation;
