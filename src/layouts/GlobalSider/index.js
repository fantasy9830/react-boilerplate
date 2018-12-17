import React from 'react';
import PropTypes from 'prop-types';
import { Drawer } from 'antd';
import SiderMenu from './SiderMenu';
import container from './container';

const GlobalSider = props =>
  props.isMobile ? (
    <Drawer
      visible={!props.collapsed}
      placement="left"
      onClose={() => props.collapse(true)}
      style={{ padding: 0, height: '100vh' }}
    >
      <SiderMenu
        {...props}
        collapsed={props.isMobile ? false : props.collapsed}
      />
    </Drawer>
  ) : (
    <SiderMenu {...props} />
  );

GlobalSider.propTypes = {
  collapse: PropTypes.func.isRequired,
  collapsed: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool.isRequired,
  permissions: PropTypes.array.isRequired,
};

export default container(GlobalSider);
