import React from 'react';
import PropTypes from 'prop-types';
import SiderMenu from './SiderMenu';
import container from './container';
import { MobileDrawer } from './style';

function authorized(menus, permissions) {
  return menus.map(item => {
    if (item.path && item.component) {
      item.auth = permissions.indexOf(item.key) >= 0;
    } else if (item.children) {
      item.auth = authorized(item.children, permissions).some(
        child => child.auth,
      );
    }

    return item;
  });
}

const GlobalSider = ({ menus, permissions, ...props }) =>
  props.isMobile ? (
    <MobileDrawer
      visible={!props.collapsed}
      placement="left"
      onClose={() => props.collapse(true)}
    >
      <SiderMenu
        {...props}
        menus={authorized(menus, permissions)}
        collapsed={props.isMobile ? false : props.collapsed}
      />
    </MobileDrawer>
  ) : (
    <SiderMenu {...props} menus={authorized(menus, permissions)} />
  );

GlobalSider.propTypes = {
  collapse: PropTypes.func.isRequired,
  collapsed: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool.isRequired,
  permissions: PropTypes.array.isRequired,
};

export default container(GlobalSider);
