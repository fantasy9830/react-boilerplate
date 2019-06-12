import React, { useEffect } from 'react';
import { Layout } from 'antd';
import dayjs from 'dayjs';
import jwtDecode from 'jwt-decode';
import Media from 'react-media';
import GlobalHeader from './GlobalHeader';
import GlobalSider from './GlobalSider';
import GlobalFooter from './GlobalFooter';
import ContentRouter from './ContentRouter';
import container from './container';
import menus from './menus';
import logo from './../assets/images/logo.png';
import { Content } from './style';
import StoreState from 'StoreState';

export interface IProps {
  user: any;
  layout: StoreState.ILayout;
  collapse(collapsed: boolean): void;
  refreshToken(token: string): void;
}

const Basic = ({ user, layout, collapse, refreshToken }: IProps) => {
  const permissions = user.permissions ? Object.keys(user.permissions) : [];

  useEffect(() => {
    if (user.token) {
      const decoded: IClaims = jwtDecode(user.token);

      // token過期
      if (dayjs.unix(decoded.exp).isBefore(dayjs())) {
        refreshToken(user.token);
      }
    }
  });

  return (
    <Media query="(max-width: 599px)">
      {isMobile => (
        <Layout>
          <GlobalSider
            isMobile={isMobile}
            collapsed={layout.collapsed}
            collapse={collapse}
            logo={logo}
            menus={menus}
            permissions={permissions}
          />
          <Layout style={{ minHeight: '100vh' }}>
            <GlobalHeader
              isMobile={isMobile}
              collapsed={layout.collapsed}
              collapse={collapse}
              logo={logo}
            />

            <Content>
              <ContentRouter menus={menus} permissions={permissions} />
            </Content>

            <GlobalFooter />
          </Layout>
        </Layout>
      )}
    </Media>
  );
};

export default container(Basic);
