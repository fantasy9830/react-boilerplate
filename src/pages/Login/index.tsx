import React from 'react';
import { Container, Content } from './style';
import LoginHeader from './components/Header';
import LoginForm from './components/Form';
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
