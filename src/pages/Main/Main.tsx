import React from 'react';

import CustomFooter from '../../components/UI/CustomFooter/CustomFooter';
import AboutApp from './components/AboutApp/AboutApp';

const Main: React.FC = () => {
  return (
    <>
      <AboutApp />
      <CustomFooter />
    </>
  );
};

export default Main;
