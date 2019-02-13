import Loadable from 'react-loadable';
import PageLoading from './PageLoading';
import locales from './../locales';
import { FaHome, FaChartLine, FaCogs } from 'react-icons/fa';

export default [
  {
    icon: FaHome,
    key: 'sidermenu1',
    name: locales.t('menu:sidermenu1'),
    children: [
      {
        icon: 'star',
        key: 'sidermenu1-1',
        name: locales.t('menu:sidermenu1-1'),
        path: '/sidermenu1-1',
        component: Loadable({
          loader: () => import('./../screens/Demo'),
          loading: PageLoading,
        }),
      },
      {
        icon: 'star',
        key: 'sidermenu1-2',
        name: locales.t('menu:sidermenu1-2'),
        path: '/sidermenu1-2',
        component: Loadable({
          loader: () => import('./../screens/Demo'),
          loading: PageLoading,
        }),
      },
      {
        icon: 'star',
        key: 'sidermenu1-3',
        name: locales.t('menu:sidermenu1-3'),
        children: [
          {
            icon: 'rocket',
            key: 'sidermenu1-3-1',
            name: locales.t('menu:sidermenu1-3-1'),
            path: '/sidermenu1-3-1',
            component: Loadable({
              loader: () => import('./../screens/Demo'),
              loading: PageLoading,
            }),
          },
          {
            icon: 'rocket',
            key: 'sidermenu1-3-2',
            name: locales.t('menu:sidermenu1-3-2'),
            path: '/sidermenu1-3-2',
            component: Loadable({
              loader: () => import('./../screens/Demo'),
              loading: PageLoading,
            }),
          },
        ],
      },
    ],
  },
  {
    icon: FaChartLine,
    key: 'sidermenu2',
    name: locales.t('menu:sidermenu2'),
    children: [
      {
        icon: 'star',
        key: 'sidermenu2-1',
        name: locales.t('menu:sidermenu2-1'),
        path: '/sidermenu2-1',
        component: Loadable({
          loader: () => import('./../screens/Demo'),
          loading: PageLoading,
        }),
      },
      {
        icon: 'star',
        key: 'sidermenu2-2',
        name: locales.t('menu:sidermenu2-2'),
        path: '/sidermenu2-2',
        component: Loadable({
          loader: () => import('./../screens/Demo'),
          loading: PageLoading,
        }),
      },
      {
        icon: 'star',
        key: 'sidermenu2-3',
        name: locales.t('menu:sidermenu2-3'),
        path: '/sidermenu2-3',
        component: Loadable({
          loader: () => import('./../screens/Demo'),
          loading: PageLoading,
        }),
      },
    ],
  },
  {
    icon: FaCogs,
    key: 'sidermenu3',
    name: locales.t('menu:sidermenu3'),
    path: '/sidermenu3',
    component: Loadable({
      loader: () => import('./../screens/Demo'),
      loading: PageLoading,
    }),
  },
];
