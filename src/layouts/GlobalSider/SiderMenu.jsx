import React from 'react';
import PropTypes from 'prop-types';
import { Sider } from './style';
import LogoBox from './../LogoBox';
import BaseMenu from './BaseMenu';
import container from './container';

class SiderMenu extends React.Component {
  static propTypes = {
    logo: PropTypes.string.isRequired,
  };

  render() {
    const { isMobile, collapsed, collapse, logo } = this.props;

    return (
      <Sider
        breakpoint="md"
        collapsible
        collapsed={collapsed}
        onCollapse={collapse}
        trigger={null}
        width={256}
      >
        <LogoBox
          to="/"
          image={logo}
          title="Logo"
          onClick={isMobile ? () => collapse(true) : undefined}
        />
        <BaseMenu {...this.props} />
      </Sider>
    );
  }
}

export default container(SiderMenu);
