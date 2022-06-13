import './AppToolBar.scss';

import React from 'react';

import { Divider } from 'antd';
import { Link } from 'react-router-dom';
import logo from '../../../assets/icons/logo.svg';
import { useTypedSelectorHook } from '../../../hooks/useTypedSelector';
import AnonymousMenu from './Menus/AnonymousMenu';
import DropdownMenu from './Menus/components/DropdownMenu/DropdownMenu';

const AppToolbar: React.FC = () => {
  const { user } = useTypedSelectorHook(state => state.users);


  const addActiveClass = (e: any) => {
    const classes = document.querySelectorAll('a');
    for (let i = 0; i < classes.length; i++) {
      classes[i].classList.remove('header-menuLink-menuLinkActive', 'locationIconActive');
    }
    e.currentTarget.classList.add('header-menuLink-menuLinkActive');
  };

  const changeColorLocationIcon = (e: any) => {
    e.currentTarget.classList.add('locationIconActive');
  };

  return (
    <header id='header' className='header'>
      <div className='container'>
        <div className='logo'>
          <Link to='/'>
            <img src={logo} alt='Logo' style={{ marginLeft: '13px' }} />
            <span className='logoText1 logoText'>glam</span>
            <span className='logoText2 logoText'>ping</span>
          </Link>
        </div>
        <div>
          <Link className='header-menuLink' to='/' onClick={e => addActiveClass(e)}>
            Главная
          </Link>
          <Divider className='header-divider' type='vertical' />
          <Link
            className='header-menuLink locationIcon'
            to='/locations-map'
            onClick={e => {
              addActiveClass(e);
              changeColorLocationIcon(e);
            }}
          >
            Карта глэмпингов
          </Link>
          <Divider className='header-divider' type='vertical' />
          <Link className='header-menuLink' to='/store/[]' onClick={e => addActiveClass(e)}>
            Магазин
          </Link>
          <Divider className='header-divider' type='vertical' />
          <Link className='header-menuLink' to='/locations/new-location' onClick={e => addActiveClass(e)}>
            Сдать землю
          </Link>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>{user ? <DropdownMenu /> : <AnonymousMenu />}</div>
      </div>
    </header>
  );
};

export default AppToolbar;
