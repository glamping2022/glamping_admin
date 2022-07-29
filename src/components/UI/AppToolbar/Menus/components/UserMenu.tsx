import React from 'react';
import './UserMenu.scss';
import { useActions } from '../../../../../hooks/useAction';
import { useTypedSelectorHook } from '../../../../../hooks/useTypedSelector';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const UserMenu: React.FC = () => {
  const { logoutUser } = useActions();

  const logoutHandler = () => {
    logoutUser(user!._id);
  };

  const { user } = useTypedSelectorHook(state => state.users);

  return (
    <>
      <Menu>
        <Menu.ItemGroup>
          <Menu.Item className='mobile-function' key='setting:2'>
            <Link to='/'>На главную</Link>
          </Menu.Item>
          <Menu.Item key='setting:7' onClick={logoutHandler}>
            <Link to='/'>Выйти</Link>
          </Menu.Item>
        </Menu.ItemGroup>
      </Menu>
    </>
  );
};

export default UserMenu;
