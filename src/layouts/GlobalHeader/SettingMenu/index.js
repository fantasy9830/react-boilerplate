import React from 'react';
import { Dropdown, Avatar, Menu, Icon } from 'antd';
import { withRouter } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';
import { IconContext } from 'react-icons';
import { FaSignOutAlt, FaUserAlt } from 'react-icons/fa';
import { Action } from './style';
import container from './container';

const { Item } = Menu;

class SettingMenu extends React.Component {
  handleMenuClick = ({ key }) => {
    switch (key) {
      case 'logout':
        this.props.logout();
        this.props.history.push('/');
        break;
      default:
        break;
    }
  };

  render() {
    const { t } = this.props;

    const MenuItem = (
      <Menu onClick={this.handleMenuClick} onTouchStart={this.handleMenuClick}>
        <Item key="logout">
          <Icon component={FaSignOutAlt} />
          <span>{t('setting.logout')}</span>
        </Item>
      </Menu>
    );

    return (
      <IconContext.Provider value={{ style: { verticalAlign: 'unset' } }}>
        <Dropdown
          overlay={MenuItem}
          trigger={['click']}
          placement="bottomRight"
        >
          <Action>
            <Avatar style={{ marginRight: '8px' }}>
              <FaUserAlt style={{ verticalAlign: 'middle' }} />
            </Avatar>
            <span style={{ verticalAlign: 'middle' }}>
              {this.props.user.name}
            </span>
          </Action>
        </Dropdown>
      </IconContext.Provider>
    );
  }
}

export default withNamespaces('layout')(withRouter(container(SettingMenu)));
