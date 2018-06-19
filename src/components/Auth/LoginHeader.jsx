import React from 'react';
import PropTypes from 'prop-types';
import { Top, Header, HeaderLink, Logo, Title, Desc } from './style';

const LoginHeader = props => {
  return (
    <Top>
      <Header>
        <HeaderLink to="/">
          <Logo src={props.logo} />
          <Title>{props.title}</Title>
        </HeaderLink>
      </Header>
      <Desc>{props.desc}</Desc>
    </Top>
  );
};

LoginHeader.propTypes = {
  title: PropTypes.string,
  logo: PropTypes.string,
  desc: PropTypes.string,
};

export default LoginHeader;
