import React from 'react';
import { Dropdown, Avatar, Menu, Icon } from 'antd';
import { withRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { IconContext } from 'react-icons';
import { FaSignOutAlt, FaUserAlt } from 'react-icons/fa';
import { Action } from './style';
import container from './container';

const { Item } = Menu;

const SettingMenu = props => {
  const [t] = useTranslation('layout');

  const MenuItem = (
    <Menu onClick={handleMenuClick} onTouchStart={handleMenuClick}>
      <Item key="logout">
        <Icon component={FaSignOutAlt} />
        <span>{t('setting.logout')}</span>
      </Item>
    </Menu>
  );

  function handleMenuClick({ key }) {
    switch (key) {
      case 'logout':
        props.logout();
        props.history.push('/');
        break;
      default:
        break;
    }
  }

  return (
    <IconContext.Provider value={{ style: { verticalAlign: 'unset' } }}>
      <Dropdown overlay={MenuItem} trigger={['click']} placement="bottomRight">
        <Action>
          <Avatar style={{ marginRight: '8px' }}>
            <FaUserAlt style={{ verticalAlign: 'middle' }} />
          </Avatar>
          <span style={{ verticalAlign: 'middle' }}>{props.user.name}</span>
        </Action>
      </Dropdown>
    </IconContext.Provider>
  );
};

export default withRouter(container(SettingMenu));
