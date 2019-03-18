import { lazy } from 'react';
import locales from './../locales';
import { FaHome, FaChartLine, FaCogs } from 'react-icons/fa';

const Demo = lazy(() => import('./../screens/Demo'));

const menus: Array<IMenus> = [
  {
    key: 'sidermenu1',
    name: locales.t('menu:sidermenu1'),
    icon: FaHome,
    children: [
      {
        key: 'sidermenu1-1',
        name: locales.t('menu:sidermenu1-1'),
        icon: 'star',
        path: '/sidermenu1-1',
        component: Demo,
      },
      {
        key: 'sidermenu1-2',
        name: locales.t('menu:sidermenu1-2'),
        icon: 'star',
        path: '/sidermenu1-2',
        component: Demo,
      },
      {
        key: 'sidermenu1-3',
        name: locales.t('menu:sidermenu1-3'),
        icon: 'star',
        children: [
          {
            key: 'sidermenu1-3-1',
            name: locales.t('menu:sidermenu1-3-1'),
            icon: 'rocket',
            path: '/sidermenu1-3-1',
            component: Demo,
          },
          {
            key: 'sidermenu1-3-2',
            name: locales.t('menu:sidermenu1-3-2'),
            icon: 'rocket',
            path: '/sidermenu1-3-2',
            component: Demo,
          },
        ],
      },
    ],
  },
  {
    key: 'sidermenu2',
    name: locales.t('menu:sidermenu2'),
    icon: FaChartLine,
    children: [
      {
        key: 'sidermenu2-1',
        name: locales.t('menu:sidermenu2-1'),
        icon: 'star',
        path: '/sidermenu2-1',
        component: Demo,
      },
      {
        key: 'sidermenu2-2',
        name: locales.t('menu:sidermenu2-2'),
        icon: 'star',
        path: '/sidermenu2-2',
        component: Demo,
      },
      {
        key: 'sidermenu2-3',
        name: locales.t('menu:sidermenu2-3'),
        icon: 'star',
        path: '/sidermenu2-3',
        component: Demo,
      },
    ],
  },
  {
    key: 'sidermenu3',
    name: locales.t('menu:sidermenu3'),
    icon: FaCogs,
    path: '/sidermenu3',
    component: Demo,
  },
];

export default menus;
