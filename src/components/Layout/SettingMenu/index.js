import React, { Component } from 'react';
import { Dropdown, Avatar, Menu } from 'antd';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { translate } from 'react-i18next';
import { Action } from './style';
import container from './container';

const { Item } = Menu;

class SettingMenu extends Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
  }

  logout() {
    this.props.logout();
    this.props.redirect('/');
  }

  render() {
    const { t } = this.props;

    const MenuItem = (
      <Menu>
        <Item key="logout">
          <a onClick={this.logout}>
          <FontAwesomeIcon icon="sign-out-alt" />&nbsp; {t('setting.logout')}
          </a>
        </Item>
      </Menu>
    );

    return (
      <Dropdown overlay={MenuItem} trigger={['click']} placement="bottomRight">
        <Action>
          <Avatar size="large" icon="user" style={{ marginRight: '8px' }} />
          <span style={{ verticalAlign: 'middle' }}>
            {this.props.user.name}
          </span>
        </Action>
      </Dropdown>
    );
  }
}

export default translate('layout')(container(SettingMenu));
