import React from 'react';
import SiderMenu from './SiderMenu';
import { setAuthority } from './../../utils/auth';
import container from './container';
import { MobileDrawer } from './style';

export interface IProps {
  menus: IMenus[];
  logo: string;
  collapsed: boolean;
  isMobile: boolean;
  permissions: string[];
  collapse(collapsed: boolean): void;
}

const GlobalSider = ({ menus, permissions, ...props }: IProps) =>
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

export default container(GlobalSider);
