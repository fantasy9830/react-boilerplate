import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import Media from 'react-media';
import GlobalHeader from './GlobalHeader';
import GlobalSider from './GlobalSider';
import GlobalFooter from './GlobalFooter';
import ContentRouter from './ContentRouter';
import container from './container';
import menus from './menus';
import logo from './../assets/images/logo.png';
import { Content } from './style';

const Basic = ({ user, layout, collapse, getProfile }) => {
  const permissions = user.permissions ? Object.keys(user.permissions) : [];

  useEffect(() => {
    if (user.id === 0) {
      getProfile();
    }
  }, [user, getProfile]);

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
              {user.id > 0 && (
                <ContentRouter menus={menus} permissions={permissions} />
              )}
            </Content>

            <GlobalFooter />
          </Layout>
        </Layout>
      )}
    </Media>
  );
};

Basic.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    permissions: PropTypes.object,
  }),
  layout: PropTypes.shape({
    collapsed: PropTypes.bool.isRequired,
  }),
  collapse: PropTypes.func.isRequired,
  getProfile: PropTypes.func.isRequired,
};

export default container(Basic);
