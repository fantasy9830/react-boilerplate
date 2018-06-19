import React from 'react';

export default [
  {
    icon: 'fa-home',
    key: 'sidermenu1',
    children: [
      {
        icon: 'star',
        key: 'sidermenu1-1',
        path: '/sidermenu1-1',
        component: () => <div>SiderMenu1-1</div>
      },
      {
        icon: 'star',
        key: 'sidermenu1-2',
        path: '/sidermenu1-2',
        component: () => <div>SiderMenu1-2</div>
      },
      {
        icon: 'star',
        key: 'sidermenu1-3',
        children: [
          {
            icon: 'rocket',
            key: 'sidermenu1-3-1',
            path: '/sidermenu1-3-1',
            component: () => <div>SiderMenu1-3-1</div>
          },
          {
            icon: 'rocket',
            key: 'sidermenu1-3-2',
            path: '/sidermenu1-3-2',
            component: () => <div>SiderMenu1-3-2</div>
          },
        ],
      },
    ],
  },
  {
    icon: 'fa-chart-line',
    key: 'sidermenu2',
    children: [
      {
        icon: 'star',
        key: 'sidermenu2-1',
        path: '/sidermenu2-1',
        component: () => <div>SiderMenu2-1</div>
      },
      {
        icon: 'star',
        key: 'sidermenu2-2',
        path: '/sidermenu2-2',
        component: () => <div>SiderMenu2-2</div>
      },
      {
        icon: 'star',
        key: 'sidermenu2-3',
        path: '/sidermenu2-3',
        component: () => <div>SiderMenu2-3</div>
      },
    ],
  },
  {
    icon: 'fa-cogs',
    key: 'sidermenu3',
    path: '/sidermenu3',
    component: () => <div>SiderMenu3</div>
  },
];
