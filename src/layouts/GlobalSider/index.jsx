import React from 'react';
import PropTypes from 'prop-types';
import SiderMenu from './SiderMenu';
import { setAuthority } from '../../utils/auth';
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

GlobalSider.prototype = {
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
  logo: PropTypes.string.isRequired,
  collapsed: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool.isRequired,
  permissions: PropTypes.arrayOf(PropTypes.string).isRequired,
  collapse: PropTypes.func.isRequired,
};

export default container(GlobalSider);
