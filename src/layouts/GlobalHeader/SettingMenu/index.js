import React from 'react';
import { Dropdown, Avatar, Menu } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withRouter } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';
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
          <FontAwesomeIcon icon="sign-out-alt" />
          &nbsp; {t('setting.logout')}
        </Item>
      </Menu>
    );

    return (
      <Dropdown overlay={MenuItem} trigger={['click']} placement="bottomRight">
        <Action>
          <Avatar style={{ marginRight: '8px' }}>
            <FontAwesomeIcon icon="user" />
          </Avatar>
          <span style={{ verticalAlign: 'middle' }}>
            {this.props.user.name}
          </span>
        </Action>
      </Dropdown>
    );
  }
}

export default withNamespaces('layout')(withRouter(container(SettingMenu)));
