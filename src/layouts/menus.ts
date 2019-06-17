import { lazy } from 'react';
import locales from './../locales';
import { FaChartBar, FaTasks, FaUsers, FaUser, FaBan } from 'react-icons/fa';

const Demo = lazy(() => import('./../pages/Demo'));

const menus: Array<IMenus> = [
  {
    key: 'dashboard',
    name: locales.t('menu:dashboard'),
    icon: FaChartBar,
    path: '/',
    component: Demo,
  },
  {
    key: 'admin',
    name: locales.t('menu:admin'),
    icon: FaTasks,
    children: [
      {
        key: 'users',
        name: locales.t('menu:users'),
        icon: FaUsers,
        path: '/admin/users',
        component: Demo,
      },
      {
        key: 'roles',
        name: locales.t('menu:roles'),
        icon: FaUser,
        path: '/admin/roles',
        component: Demo,
      },
      {
        key: 'permission',
        name: locales.t('menu:permission'),
        icon: FaBan,
        path: '/admin/permission',
        component: Demo,
      },
    ],
  },
];

export default menus;
