import React from 'react';
import { Dropdown, Avatar, Menu } from 'antd';
import { withRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { IconContext } from 'react-icons';
import { FaSignOutAlt, FaUserAlt } from 'react-icons/fa';
import { Action } from './style';
import container from './container';
import StoreState from 'StoreState';
import { ClickParam } from 'antd/lib/menu';

const { Item } = Menu;

export interface IProps {
  user: StoreState.IUser;
  history: any;
  logout(): void;
  clearOpenKeys(): void;
  changeActive(current: string): void;
}

const SettingMenu = (props: IProps) => {
  const [t] = useTranslation('layout');

  const MenuItem = (
    <Menu onClick={handleMenuClick}>
      <Item key="logout">
        <FaSignOutAlt style={{ marginRight: '8px' }} />
        <span>{t('setting.logout')}</span>
      </Item>
    </Menu>
  );

  function handleMenuClick({ key }: ClickParam) {
    switch (key) {
      case 'logout':
        props.logout();
        props.clearOpenKeys();
        props.changeActive('home');
        props.history.push('/');
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
          <span>{props.user.nickname}</span>
        </Action>
      </Dropdown>
    </IconContext.Provider>
  );
};

export default withRouter<any>(container(SettingMenu));
