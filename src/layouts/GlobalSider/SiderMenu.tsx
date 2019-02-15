import React from 'react';
import { Sider } from './style';
import LogoBox from './../LogoBox';
import BaseMenu from './BaseMenu';
import container from './container';

export interface IProps {
  logo: string;
  menus: IMenus[];
  collapsed: boolean;
  isMobile: boolean;
  collapse(collapsed: boolean): void;
}

const SiderMenu = (props: IProps) => {
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

export default container(SiderMenu);
