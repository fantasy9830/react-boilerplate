import React from 'react';
import Notice from './Notice';
import SettingMenu from './SettingMenu';
import MobileLogo from './../LogoBox/MobileLogo';
import { Header, MenuBar, Right } from './style';

export interface IProps {
  logo: string;
  collapsed: boolean;
  isMobile: boolean;
  collapse(collapsed: boolean): void;
}

const GlobalHeader = ({ isMobile, collapsed, collapse, logo }: IProps) => {
  return (
    <Header tagName="header">
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

export default GlobalHeader;
