import React from 'react';
import { Container, Content } from './style';
import LoginHeader from './../../components/Login/Header';
import LoginForm from './../../components/Login/Form';
import GlobalFooter from './../../layouts/GlobalFooter';

import background from './../../assets/images/background.svg';

const Login = () => {
  return (
    <Container background={background}>
      <Content>
        <LoginHeader />
        <LoginForm />
      </Content>
      <GlobalFooter />
    </Container>
  );
};

export default Login;
