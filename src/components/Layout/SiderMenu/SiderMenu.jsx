import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { translate } from 'react-i18next';
import { Sider } from './style';
import LogoBox from './../LogoBox';
import container from './container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const { SubMenu, Item } = Menu;

class SiderMenu extends Component {
  constructor(props) {
    super(props);

    this.handleOpenChange = this.handleOpenChange.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);

    this.state = {
      openKeys: [],
    };
  }

  isMainMenu(openKey) {
    return this.props.menus.some(
      item => openKey && (item.key === openKey || item.path === openKey),
    );
  }

  handleOpenChange(openKeys) {
    const lastOpenKey = openKeys[openKeys.length - 1];
    const moreThanOne =
      openKeys.filter(openKey => this.isMainMenu(openKey)).length > 1;

    this.setState(() => ({
      openKeys: moreThanOne ? [lastOpenKey] : [...openKeys],
    }));
  }

  handleItemClick({ key, keyPath }) {
    this.props.changeActive(key);
    if (keyPath.length === 1) {
      this.setState(() => ({ openKeys: [] }));
    }
  }

  getNavMenuItems(menus) {
    if (!menus) {
      return [];
    }

    const permissions = this.props.permissions ? this.props.permissions.read : [];

    return menus
      .filter(item => item.key)
      .filter(
        item =>
          Array.isArray(permissions) && permissions.indexOf(item.key) >= 0,
      )
      .map(item => this.getSubMenuOrItem(item))
      .filter(item => !!item);
  }

  getSubMenuOrItem(item) {
    const { t } = this.props;
    if (item.children && item.children.some(child => child.key)) {
      return (
        <SubMenu
          key={item.key}
          title={
            item.icon ? (
              <span>
                {this.getIcon(item.icon)}
                <span>{t(`menu.${item.key}`)}</span>
              </span>
            ) : (
              t(`menu.${item.key}`)
            )
          }
        >
          {this.getNavMenuItems(item.children)}
        </SubMenu>
      );
    } else {
      return <Item key={item.key}>{this.getMenuItemPath(item)}</Item>;
    }
  }

  getMenuItemPath(item) {
    const { t } = this.props;
    if (/^https?:\/\//.test(item.path)) {
      return (
        <a href={item.path}>
          {this.getIcon(item.icon)}
          <span>{t(`menu.${item.key}`)}</span>
        </a>
      );
    } else {
      return (
        <Link to={item.path}>
          {this.getIcon(item.icon)}
          <span>{t(`menu.${item.key}`)}</span>
        </Link>
      );
    }
  }

  getIcon(icon) {
    if (typeof icon === 'string') {
      if (icon.indexOf('fa-') === 0) {
        icon = icon.replace(/^fa-/i, '');

        return <FontAwesomeIcon icon={icon} className="anticon" />;
      } else {
        return <Icon type={icon} />;
      }
    }

    return icon;
  }

  render() {
    const { menus, current, collapsed, collapse, logo } = this.props;
    const menuProps = collapsed ? {} : { openKeys: this.state.openKeys };

    return (
      <Sider
        breakpoint="md"
        collapsible
        collapsed={collapsed}
        onCollapse={collapse}
        trigger={null}
        width={256}
      >
        <LogoBox to="/" image={logo} title="Logo" />

        <Menu
          theme="dark"
          mode="inline"
          {...menuProps}
          selectedKeys={[current]}
          onOpenChange={this.handleOpenChange}
          onClick={this.handleItemClick}
          style={{ margin: '16px 0', width: '100%' }}
        >
          {this.getNavMenuItems(menus)}
        </Menu>
      </Sider>
    );
  }
}

SiderMenu.propTypes = {
  menus: PropTypes.array.isRequired,
  current: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
};

export default container(translate('layout')(SiderMenu));
