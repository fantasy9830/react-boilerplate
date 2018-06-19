import React, { Component } from 'react';
import { Layout } from 'antd';
import { enquireScreen, unenquireScreen } from 'enquire-js';
import MobileLogo from './LogoBox/MobileLogo';
import Notice from "./Notice";
import SettingMenu from "./SettingMenu";
import SiderMenu from './SiderMenu';
import ContentRoute from './../../utils/ContentRoute';
import container from './container';
import menus from './menus';
import logo from './../../images/logo.png';
import { Header, Content, MenuBar, Right } from './style';
import GlobalFooter from "./GlobalFooter";

let isMobile = false;
enquireScreen(mobile => (isMobile = mobile));

class Basic extends Component {
  constructor(props) {
    super(props);

    this.enquireHandler = null;

    this.state = { isMobile };
  }

  componentDidMount() {
    this.enquireHandler = enquireScreen(mobile =>
      this.setState({ isMobile: mobile }),
    );
  }

  componentWillUnmount() {
    unenquireScreen(this.enquireHandler);
  }

  render() {
    return (
      <Layout>
        <SiderMenu
          menus={menus}
          isMobile={this.state.isMobile}
          collapsed={this.props.layout.collapsed}
          collapse={this.props.collapse}
          logo={logo}
        />
        <Layout>
          <Header>
            {this.state.isMobile && <MobileLogo to="/" image={logo} />}
            <MenuBar
              type={this.props.layout.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={() => this.props.collapse(!this.props.layout.collapsed)}
            />
            <Right>
              <Notice />
              <SettingMenu />
            </Right>
          </Header>

          <Content>
            <ContentRoute menus={menus} />
          </Content>

          <GlobalFooter />
        </Layout>
      </Layout>
    );
  }
}

export default container(Basic);
