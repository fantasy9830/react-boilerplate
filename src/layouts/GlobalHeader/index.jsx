import React from 'react';
import PropTypes from 'prop-types';
import Notice from './Notice';
import SettingMenu from './SettingMenu';
import MobileLogo from '../LogoBox/MobileLogo';
import { Header, MenuBar, Right } from './style';

const GlobalHeader = ({ isMobile, collapsed, collapse, logo }) => {
  return (
    <Header>
      {isMobile && <MobileLogo image={logo} />}
      <MenuBar collapsed={collapsed} onClick={() => collapse(!collapsed)} />
      <Right>
        <Notice />
        <SettingMenu />
      </Right>
    </Header>
  );
};

GlobalHeader.propTypes = {
  collapse: PropTypes.func.isRequired,
  collapsed: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool.isRequired,
  logo: PropTypes.string.isRequired,
};

export default GlobalHeader;
