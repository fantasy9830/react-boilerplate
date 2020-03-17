import React from 'react';
import { Dropdown, Avatar, Menu } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { IconContext } from 'react-icons';
import { FaSignOutAlt, FaUserAlt } from 'react-icons/fa';
import { Action } from './style';
import { changeActive, clearOpenKeys } from './../../../redux/layout';
import { logout } from './../../../redux/user';

const { Item } = Menu;

const SettingMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const history = useHistory();
  const [t] = useTranslation('layout');

  const MenuItem = (
    <Menu onClick={handleMenuClick}>
      <Item key="logout">
        <FaSignOutAlt style={{ marginRight: '8px' }} />
        <span>{t('setting.logout')}</span>
      </Item>
    </Menu>
  );

  function handleMenuClick({ key }) {
    switch (key) {
      case 'logout':
        dispatch(logout());
        dispatch(clearOpenKeys());
        dispatch(changeActive('home'));
        history.push('/');
        break;
      default:
        break;
    }
  }

  return (
    <IconContext.Provider value={{ style: { fontSize: '20px' } }}>
      <Dropdown overlay={MenuItem} trigger={['click']} placement="bottomRight">
        <Action>
          <Avatar style={{ marginRight: '8px' }}>
            <FaUserAlt />
          </Avatar>
          <span>{user.nickname}</span>
        </Action>
      </Dropdown>
    </IconContext.Provider>
  );
};

export default SettingMenu;
