import React from 'react';
import '../UserMenu.scss';
import { Dropdown } from 'antd';
import burger from '../../../../../../assets/icons/i-burger.svg';
import ic from '../../../../../../assets/icons/account.svg';
import UserMenu from '../UserMenu';

const DropdownMenu: React.FC = () => {
  return (
    <div>
      <Dropdown trigger={['click']} className='user_menu-big' overlay={<UserMenu />} placement='bottomRight'>
        <img src={ic} alt='account' />
      </Dropdown>
      <Dropdown trigger={['click']} className='user_menu-small' overlay={<UserMenu />} placement='bottomRight'>
        <img src={burger} alt='account' />
      </Dropdown>
    </div>
  );
};

export default DropdownMenu;
