import styled from 'styled-components';
import { Layout, Drawer } from 'antd';

export const Sider = styled(Layout.Sider)`
  min-height: 100vh;
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
  position: relative;
  z-index: 10;
`;

export const MobileDrawer = styled(Drawer)`
  padding: 0;
  height: '100vh';

  .ant-drawer-header {
    display: none;
  }

  .ant-drawer-body {
    padding: 0;
  }
`;
