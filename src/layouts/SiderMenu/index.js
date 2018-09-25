import React from 'react';
import PropTypes from 'prop-types';
import { Drawer } from 'antd';
import SiderMenu from './SiderMenu';
import container from './container';

const SiderMenuWrapper = props =>
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

SiderMenuWrapper.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  collapsed: PropTypes.bool.isRequired,
  collapse: PropTypes.func.isRequired,
};

export default container(SiderMenuWrapper);
