import React from 'react';
import { Layout } from 'antd';
import Media from 'react-media';
import GlobalHeader from './GlobalHeader';
import GlobalSider from './GlobalSider';
import GlobalFooter from './GlobalFooter';
import ContentScreen from './../screens/Content';
import container from './container';
import menus from './menus';
import logo from './../assets/images/logo.png';
import { Content } from './style';
import StoreState from 'StoreState';

export interface IProps {
  user: any;
  layout: StoreState.ILayout;
  collapse(collapsed: boolean): void;
}

const Basic = ({ user, layout, collapse }: IProps) => {
  const permissions = user.permissions ? user.permissions.read : [];

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
              <ContentScreen menus={menus} permissions={permissions} />
            </Content>

            <GlobalFooter />
          </Layout>
        </Layout>
      )}
    </Media>
  );
};

export default container(Basic);
