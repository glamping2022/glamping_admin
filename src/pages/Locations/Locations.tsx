import './Locations.scss';

// import LocationFilter from '../LocationsMap/components/LocationFilter/LocationFilter';
import React, { useEffect } from 'react';

import {
  Col,
  Layout,
  Pagination,
  Row,
} from 'antd';

import GoBack from '../../components/Buttons/GoBack/GoBack';
import { useActions } from '../../hooks/useAction';
import { useTypedSelectorHook } from '../../hooks/useTypedSelector';
import LocationItem from '../Main/components/LocationMini/components/LocationItem';

const { Content } = Layout;

const Locations: React.FC = () => {
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
    <div className='container'>
      <Layout className='location-body'>
        <Content>
          <Row className='location-content'>{locationsList}</Row>
          <div className='pagination-locations'>
            {noPages ? <></> : <Pagination total={totalPages} onChange={onChange} />}
          </div>
          <div className='button-back'>
            <GoBack />
          </div>
          {user?.role === 'user' ? 
            <h2>ADMIN!!!</h2> : null
          }
        </Content>
      </Layout>
    </div>
  );
};

export default Locations;
