import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import container from './container';
import { IconContext } from 'react-icons';

const { SubMenu, Item } = Menu;

class BaseMenu extends React.Component {
  static propTypes = {
    menus: PropTypes.array.isRequired,
    current: PropTypes.string.isRequired,
  };

  state = { openKeys: [] };

  handleOpenChange = openKeys => {
    const lastOpenKey = openKeys[openKeys.length - 1];
    const moreThanOne =
      openKeys.filter(openKey => this.isMainMenu(openKey)).length > 1;

    this.setState(() => ({
      openKeys: moreThanOne ? [lastOpenKey] : [...openKeys],
    }));
  };

  handleItemClick = ({ key, keyPath }) => {
    this.props.changeActive(key);
    if (keyPath.length === 1) {
      this.setState(() => ({ openKeys: [] }));
    }
  };

  isMainMenu = openKey => {
    return this.props.menus.some(
      item => openKey && (item.key === openKey || item.path === openKey),
    );
  };

  getNavMenuItems = menus => {
    if (!menus) {
      return [];
    }

    const permissions = this.props.permissions
      ? this.props.permissions.read
      : [];

    return menus
      .filter(item => item.key)
      .filter(
        item =>
          Array.isArray(permissions) && permissions.indexOf(item.key) >= 0,
      )
      .map(item => this.getSubMenuOrItem(item))
      .filter(item => !!item);
  };

  getSubMenuOrItem = item => {
    if (item.children && item.children.some(child => child.key)) {
      return (
        <SubMenu
          key={item.key}
          title={
            item.icon ? (
              <span>
                {this.getIcon(item.icon)}
                <span>{item.name}</span>
              </span>
            ) : (
              item.name
            )
          }
        >
          {this.getNavMenuItems(item.children)}
        </SubMenu>
      );
    } else {
      return <Item key={item.key}>{this.getMenuItemPath(item)}</Item>;
    }
  };

  getMenuItemPath = item => {
    const { isMobile, collapse } = this.props;
    if (/^https?:\/\//.test(item.path)) {
      return (
        <a href={item.path}>
          {this.getIcon(item.icon)}
          <span>{item.name}</span>
        </a>
      );
    } else {
      return (
        <Link
          to={item.path}
          onClick={isMobile ? () => collapse(true) : undefined}
        >
          {this.getIcon(item.icon)}
          <span>{item.name}</span>
        </Link>
      );
    }
  };

  getIcon = icon => {
    if (typeof icon === 'string') {
      return <Icon type={icon} />;
    }

    return icon;
  };

  render() {
    const { menus, current, collapsed } = this.props;
    const menuProps = collapsed ? {} : { openKeys: this.state.openKeys };

    return (
      <IconContext.Provider value={{ className: 'anticon' }}>
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
      </IconContext.Provider>
    );
  }
}

export default container(BaseMenu);
