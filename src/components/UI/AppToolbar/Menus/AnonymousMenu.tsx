import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

import './AnonymousMenu.scss';
import ic from '../../../../assets/icons/account.svg';
const { SubMenu } = Menu;

const AnonymousMenu: React.FC = () => {
  return (
    <>
      <Menu triggerSubMenuAction='click' mode='horizontal'>
        <SubMenu
          key='SubMenu'
          icon={<img src={ic} alt='account' style={{ paddingLeft: '10px', paddingBottom: '4px' }} />}
          title={'Меню'}
        >
          <Menu.ItemGroup>
            <Menu.Item key='setting:2'>
              <Link to='/login'>Вход</Link>
            </Menu.Item>
            <Menu.Item className='mobile-function' key='setting:3'>
              <Link to='/'>На главную</Link>
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
    </>
  );
};

export default AnonymousMenu;
