import 'rc-drawer/assets/index.css';
import React from 'react';
import PropTypes from 'prop-types';
import DrawerMenu from 'rc-drawer';
import SiderMenu from './SiderMenu';
import container from './container';

const SiderMenuWrapper = props =>
  props.isMobile ? (
    <DrawerMenu
      getContainer={null}
      level={null}
      handleChild={<i className="drawer-handle-icon" />}
      onHandleClick={() => props.collapse(!props.collapsed)}
      open={!props.collapsed}
      onMaskClick={() => props.collapse(true)}
    >
      <SiderMenu
        {...props}
        collapsed={props.isMobile ? false : props.collapsed}
      />
    </DrawerMenu>
  ) : (
    <SiderMenu {...props} />
  );

SiderMenuWrapper.propTypes = {
  menus: PropTypes.array.isRequired,
  isMobile: PropTypes.bool.isRequired,
  collapsed: PropTypes.bool.isRequired,
  collapse: PropTypes.func.isRequired,
};

export default container(SiderMenuWrapper);
