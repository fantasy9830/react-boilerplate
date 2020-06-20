import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Layout } from 'antd';
import Media from 'react-media';
import GlobalHeader from './GlobalHeader';
import GlobalSider from './GlobalSider';
import GlobalFooter from './GlobalFooter';
import ContentRouter from './ContentRouter';
import { collapse } from './../redux/layout';
import { setProfile } from './../redux/user';
import menus from './menus';
import logo from './../assets/images/logo.png';
import { Content } from './style';

const Basic = () => {
  const dispatch = useDispatch();
  const { layout, user } = useSelector((state) => ({
    layout: state.layout,
    user: state.user,
  }));

  const permissions = user.permissions
    ? [
        ...new Set(
          user.permissions.map((permission) => permission.split('_').pop()),
        ),
      ]
    : [];

  useEffect(() => {
    if (user.id === 0) {
      dispatch(setProfile());
    }
  }, [user, dispatch]);

  return (
    <Media query="(max-width: 599px)">
      {(isMobile) => (
        <Layout>
          <GlobalSider
            isMobile={isMobile}
            collapsed={layout.collapsed}
            collapse={(v) => dispatch(collapse(v))}
            logo={logo}
            menus={menus}
            permissions={permissions}
          />
          <Layout style={{ minHeight: '100vh' }}>
            <GlobalHeader
              isMobile={isMobile}
              collapsed={layout.collapsed}
              collapse={(v) => dispatch(collapse(v))}
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

export default Basic;
