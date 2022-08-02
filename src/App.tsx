import React from 'react';

import { Layout } from 'antd';
import { Route, Switch, useLocation } from 'react-router';

import AppToolbar from './components/UI/AppToolbar/AppToolbar';
import CustomFooter from './components/UI/CustomFooter/CustomFooter';
import ProtectedRoute from './helpers/ProtectedRoute';
import { useTypedSelectorHook } from './hooks/useTypedSelector';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import ProductDetail from './pages/Main/components/ProductDetail/ProductDetail';

function App(): JSX.Element {
  document.documentElement.scrollTop = 0;
  const { user } = useTypedSelectorHook(state => state.users);
  const location = useLocation();
  return (
    <Layout>
      <AppToolbar />
      <div className='content_body'>
        <Route path='/' exact component={Main} />
        <Switch>
          <ProtectedRoute isAllowed={!user} path='/login' exact redirectTo='/' component={Login} />
          <Route path='/storedetail/:id' exact component={ProductDetail} />
        </Switch>
      </div>
      {location.pathname === '/' || location.pathname === '/register' || location.pathname === '/login' ? null : (
        <CustomFooter />
      )}
    </Layout>
  );
}

export default App;
