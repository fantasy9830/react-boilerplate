import React from 'react';
import PropTypes from 'prop-types';
import Notice from './Notice';
import SettingMenu from './SettingMenu';
import MobileLogo from './../LogoBox/MobileLogo';
import { Header, MenuBar, Right } from './style';

const GlobalHeader = ({ isMobile, collapsed, collapse, logo }) => {
  return (
    <Header>
      {isMobile && <MobileLogo image={logo} />}
      <MenuBar
        type={collapsed ? 'menu-unfold' : 'menu-fold'}
        onClick={() => collapse(!collapsed)}
      />
      <Right>
        <Notice />
        <SettingMenu />
      </Right>
    </Header>
  );
};

GlobalHeader.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  collapsed: PropTypes.bool.isRequired,
  collapse: PropTypes.func,
};

export default GlobalHeader;
