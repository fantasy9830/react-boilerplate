import { lazy } from 'react';
import locales from './../locales';
import { FaChartBar, FaTasks, FaUsers, FaUser, FaBan } from 'react-icons/fa';

const Demo = lazy(() => import('./../pages/Demo'));
const Users = lazy(() => import('./../pages/Admin/Users'));
const Roles = lazy(() => import('./../pages/Admin/Roles'));
const Permission = lazy(() => import('./../pages/Admin/Permission'));

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
        component: Users,
      },
      {
        key: 'roles',
        name: locales.t('menu:roles'),
        icon: FaUser,
        path: '/admin/roles',
        component: Roles,
      },
      {
        key: 'permission',
        name: locales.t('menu:permission'),
        icon: FaBan,
        path: '/admin/permission',
        component: Permission,
      },
    ],
  },
];

export default menus;
