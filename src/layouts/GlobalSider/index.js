import React from 'react';
import PropTypes from 'prop-types';
import SiderMenu from './SiderMenu';
import { setAuthority } from './../../utils/permission';
import container from './container';
import { MobileDrawer } from './style';

const GlobalSider = ({ menus, permissions, ...props }) =>
  props.isMobile ? (
    <MobileDrawer
      visible={!props.collapsed}
      placement="left"
      onClose={() => props.collapse(true)}
    >
      <SiderMenu
        {...props}
        menus={setAuthority(menus, permissions)}
        collapsed={props.isMobile ? false : props.collapsed}
      />
    </MobileDrawer>
  ) : (
    <SiderMenu {...props} menus={setAuthority(menus, permissions)} />
  );

GlobalSider.propTypes = {
  collapse: PropTypes.func.isRequired,
  collapsed: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool.isRequired,
  permissions: PropTypes.array.isRequired,
};

export default container(GlobalSider);
