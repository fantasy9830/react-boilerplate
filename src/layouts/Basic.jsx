import React from 'react';
import { Layout } from 'antd';
import { enquireScreen, unenquireScreen } from 'enquire-js';
import GlobalHeader from './GlobalHeader';
import GlobalSider from './GlobalSider';
import GlobalFooter from './GlobalFooter';
import ContentRoute from './../utils/ContentRoute';
import container from './container';
import menus from './menus';
import logo from './../images/logo.png';
import { Content } from './style';

let isMobile = false;
enquireScreen(mobile => (isMobile = mobile));

class Basic extends React.Component {
  state = { isMobile };

  componentDidMount() {
    this.enquireHandler = enquireScreen(mobile =>
      this.setState(() => ({ isMobile: mobile })),
    );
  }

  componentWillUnmount() {
    unenquireScreen(this.enquireHandler);
  }

  render() {
    const { user, layout, collapse } = this.props;
    const permissions = user.permissions ? user.permissions.read : [];

    return (
      <Layout>
        <GlobalSider
          menus={menus}
          isMobile={this.state.isMobile}
          collapsed={layout.collapsed}
          collapse={collapse}
          logo={logo}
        />
        <Layout style={{ minHeight: '100vh' }}>
          <GlobalHeader
            isMobile={this.state.isMobile}
            collapsed={layout.collapsed}
            collapse={collapse}
            logo={logo}
          />

          <Content>
            <ContentRoute menus={menus} permissions={permissions} />
          </Content>

          <GlobalFooter />
        </Layout>
      </Layout>
    );
  }
}

export default container(Basic);
