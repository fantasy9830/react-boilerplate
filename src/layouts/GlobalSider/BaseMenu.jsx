import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@ant-design/icons';
import { Menu } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeActive, setOpenKeys, clearOpenKeys } from '../../redux/layout';

const { SubMenu, Item } = Menu;

const BaseMenu = props => {
  const dispatch = useDispatch();
  const { current, openKeys } = useSelector(state => ({
    current: state.layout.current,
    openKeys: state.layout.openKeys,
  }));

  const { menus, collapsed } = props;
  const menuProps = collapsed ? {} : { openKeys };

  function isMainMenu(openKey) {
    return props.menus.some(
      item => item.key === openKey || item.path === openKey,
    );
  }

  function getIcon(icon) {
    const iconStyle = { fontSize: '20px' };

    return <Icon component={icon} style={iconStyle} />;
  }

  function getNavMenuItems(menus) {
    if (menus) {
      return menus
        .filter(item => item.key && item.authority)
        .map(item => getSubMenuOrItem(item))
        .filter(item => !!item);
    } else {
      return [];
    }
  }

  function getSubMenuOrItem(item) {
    if (item.children && item.children.some(child => child.key)) {
      return (
        <SubMenu
          key={item.key}
          title={
            item.icon ? (
              <span>
                {getIcon(item.icon)}
                <span>{item.name}</span>
              </span>
            ) : (
              item.name
            )
          }
        >
          {getNavMenuItems(item.children)}
        </SubMenu>
      );
    } else {
      return <Item key={item.key}>{getMenuItemPath(item)}</Item>;
    }
  }

  function getMenuItemPath(item) {
    const { isMobile, collapse } = props;
    if (item.path) {
      if (/^https?:\/\//.test(item.path)) {
        return (
          <a href={item.path}>
            {item.icon && getIcon(item.icon)}
            <span>{item.name}</span>
          </a>
        );
      } else {
        return (
          <Link
            to={item.path}
            onClick={isMobile ? () => collapse(true) : undefined}
          >
            {item.icon && getIcon(item.icon)}
            <span>{item.name}</span>
          </Link>
        );
      }
    }
  }

  function handleOpenChange(openKeys) {
    if (!props.collapsed) {
      const moreThanOne =
        openKeys.filter(openKey => isMainMenu(openKey)).length > 1;

      dispatch(setOpenKeys(moreThanOne ? [openKeys.pop()] : [...openKeys]));
    }
  }

  function handleItemClick({ key, keyPath }) {
    dispatch(changeActive(key));
    if (keyPath.length === 1) {
      dispatch(clearOpenKeys());
    } else {
      dispatch(setOpenKeys(keyPath));
    }
  }

  return (
    <Menu
      theme="dark"
      mode="inline"
      {...menuProps}
      selectedKeys={[current]}
      onOpenChange={handleOpenChange}
      onClick={handleItemClick}
      style={{ margin: '16px 0', width: '100%' }}
    >
      {getNavMenuItems(menus)}
    </Menu>
  );
};

BaseMenu.prototype = {
  logo: PropTypes.string.isRequired,
  menus: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      authority: PropTypes.bool,
      icon: PropTypes.any,
      path: PropTypes.string,
      component: PropTypes.element,
      children: PropTypes.any,
    }),
  ).isRequired,
  collapsed: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool.isRequired,
  collapse: PropTypes.func.isRequired,
};

export default BaseMenu;
