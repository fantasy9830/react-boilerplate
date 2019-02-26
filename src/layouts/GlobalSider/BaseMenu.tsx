import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import container from './container';
import { ClickParam } from 'antd/lib/menu';

const { SubMenu, Item } = Menu;

export interface IProps {
  current: string;
  openKeys: string[];
  logo: string;
  menus: IMenus[];
  collapsed: boolean;
  isMobile: boolean;
  collapse(collapsed: boolean): void;
  changeActive(current: string): void;
  setOpenKeys(keys: string[]): void;
  clearOpenKeys(): void;
}

const BaseMenu = (props: IProps) => {
  const { menus, current, collapsed } = props;
  const menuProps = collapsed ? {} : { openKeys: props.openKeys };

  function isMainMenu(openKey: string): boolean {
    return props.menus.some(
      item => item.key === openKey || item.path === openKey,
    );
  }

  function getIcon(icon: any) {
    const iconStyle = { fontSize: '20px' };

    if (typeof icon === 'string') {
      return <Icon type={icon} style={iconStyle} />;
    }

    return <Icon component={icon} style={iconStyle} />;
  }

  function getNavMenuItems(menus: IMenus[]) {
    if (menus) {
      return menus
        .filter(item => item.key && item.authority)
        .map(item => getSubMenuOrItem(item))
        .filter(item => !!item);
    } else {
      return [];
    }
  }

  function getSubMenuOrItem(item: IMenus) {
    if (item.children && item.children.some((child: any) => child.key)) {
      return (
        <SubMenu
          key={item.key}
          title={
            item.icon ? (
              <span>
                {getIcon(item.icon)}
                <span>{item.name}</span>
              </span>
            ) : (
              item.name
            )
          }
        >
          {getNavMenuItems(item.children)}
        </SubMenu>
      );
    } else {
      return <Item key={item.key}>{getMenuItemPath(item)}</Item>;
    }
  }

  function getMenuItemPath(item: IMenus) {
    const { isMobile, collapse } = props;
    if (item.path) {
      if (/^https?:\/\//.test(item.path)) {
        return (
          <a href={item.path}>
            {item.icon && getIcon(item.icon)}
            <span>{item.name}</span>
          </a>
        );
      } else {
        return (
          <Link
            to={item.path}
            onClick={isMobile ? () => collapse(true) : undefined}
          >
            {item.icon && getIcon(item.icon)}
            <span>{item.name}</span>
          </Link>
        );
      }
    }
  }

  function handleOpenChange(openKeys: string[]) {
    if (!props.collapsed) {
      const moreThanOne =
        openKeys.filter(openKey => isMainMenu(openKey)).length > 1;

      props.setOpenKeys(moreThanOne ? [openKeys.pop() as string] : [...openKeys]);
    }
  }

  function handleItemClick({ key, keyPath }: ClickParam) {
    props.changeActive(key);
    if (keyPath.length === 1) {
      props.clearOpenKeys();
    } else {
      props.setOpenKeys(keyPath);
    }
  }

  return (
    <Menu
      theme="dark"
      mode="inline"
      {...menuProps}
      selectedKeys={[current]}
      onOpenChange={handleOpenChange}
      onClick={handleItemClick}
      style={{ margin: '16px 0', width: '100%' }}
    >
      {getNavMenuItems(menus)}
    </Menu>
  );
};

export default container(BaseMenu);