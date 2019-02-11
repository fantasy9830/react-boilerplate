import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import { enquireScreen, unenquireScreen } from 'enquire-js';
import GlobalHeader from './GlobalHeader';
import GlobalSider from './GlobalSider';
import GlobalFooter from './GlobalFooter';
import ContentScreen from './../screens/Content';
import container from './container';
import menus from './menus';
import logo from './../assets/images/logo.png';
import { Content } from './style';

const Basic = ({ user, layout, collapse }) => {
  let isMobile = false;
  let enquireHandler = null;
  const permissions = user.permissions ? user.permissions.read : [];

  enquireScreen(mobile => (isMobile = mobile));

  const [mobileState, setMobileState] = useState(isMobile);
  isMobile = mobileState;

  useEffect(() => {
    enquireHandler = enquireScreen(mobile => setMobileState(mobile === true));

    return () => {
      unenquireScreen(enquireHandler);
    };
  }, []);

  return (
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
  );
};

export default container(Basic);
