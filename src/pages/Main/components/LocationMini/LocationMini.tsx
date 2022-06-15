import './LocationMini.scss';

import React, { useEffect } from 'react';

import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';

import { useActions } from '../../../../hooks/useAction';
import { useTypedSelectorHook } from '../../../../hooks/useTypedSelector';
import LocationItem from './components/LocationItem';

const LocationMini: React.FC = () => {
  const { lastFourLocations } = useTypedSelectorHook(state => state.locations);
  const { fetchLastFourLocations } = useActions();

  useEffect(() => {
    fetchLastFourLocations();
  }, []);

  const lastFourLocationsList = lastFourLocations.map(location => {
    return (
      <Col key={location._id} span={6} style={{ marginBottom: 20 }}>
        <LocationItem
          key={location._id}
          _id={location._id}
          description={location.description}
          title={location.title}
          square={location.square}
          image={location.image}
          region={location.region}
        />
      </Col>
    );
  });

  const noLocations = lastFourLocations.length < 1;

  if (noLocations) return <></>;

  return (
    <section className='location'>
      <div className='container'>
        <div className='location-header'>
          <h3 className='location-title'>Глэмпинги</h3>
          <div className='location-header-row'>
            <Link to='/locations-map'>
              <p className='location-header__link'>Показать на карте</p>
            </Link>
          </div>
        </div>
        <Row className='location-card' gutter={[2, 2]}>
          {lastFourLocationsList}
        </Row>
        <Link to='/locations'>
          <p className='location__link'>Показать все</p>
        </Link>
      </div>
    </section>
  );
};

export default LocationMini;
