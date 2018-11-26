import React from 'react';
import { withNamespaces } from 'react-i18next';
import { Top, Header, HeaderLink, Logo, Title, Desc } from './style';

import logo from './../../assets/images/logo.png';

const LoginHeader = ({ t }) => {
  return (
    <Top>
      <Header>
        <HeaderLink to="/">
          <Logo src={logo} />
          <Title>{t('title')}</Title>
        </HeaderLink>
      </Header>
      <Desc />
    </Top>
  );
};

export default withNamespaces('auth')(LoginHeader);
