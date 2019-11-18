import React from 'react';
import PropTypes from 'prop-types';
import { Sider } from './style';
import LogoBox from '../LogoBox';
import BaseMenu from './BaseMenu';
import container from './container';

const SiderMenu = props => {
  const { isMobile, collapsed, collapse, logo } = props;

  return (
    <Sider
      breakpoint="md"
      collapsible
      collapsed={collapsed}
      onCollapse={collapse}
      trigger={null}
      width={256}
    >
      <LogoBox
        image={logo}
        title="Logo"
        onClick={isMobile ? () => collapse(true) : undefined}
      />
      <BaseMenu {...props} />
    </Sider>
  );
};

SiderMenu.prototype = {
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

export default container(SiderMenu);
