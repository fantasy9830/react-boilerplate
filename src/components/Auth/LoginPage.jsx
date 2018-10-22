import React from 'react';
import { Alert, Spin } from 'antd';
import { Login } from 'ant-design-pro';
import { withNamespaces } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import { Container, Content, Main } from './style';
import LoginHeader from './LoginHeader';
import GlobalFooter from './../../layouts/GlobalFooter';
import container from './container';

import background from './images/background.svg';
import logo from './../../images/logo.png';

const { UserName, Password, Submit } = Login;

class LoginPage extends React.Component {
  state = {
    notice: '',
    loading: false,
  };

  handleSubmit = async (err, values) => {
    if (!err) {
      this.setState(() => ({ loading: true }));

      const res = await this.props.login(values.username, values.password);

      this.setState(() => ({ loading: false }));

      if (this.props.user.login) {
        const pathname =
          (this.props.location.state.from &&
            this.props.location.state.from.pathname) ||
          '/';

        this.props.history.push(pathname);
      } else if (res) {
        this.setState(() => ({ notice: res.statusText }));
      }
    }
  };

  handleClose = () => this.setState(() => ({ notice: '' }));

  render() {
    const { t } = this.props;

    return (
      <Spin spinning={this.state.loading}>
        <Container background={background}>
          <Content>
            <LoginHeader title={t('title')} logo={logo} />
            <Main>
              <Login onSubmit={this.handleSubmit}>
                {this.state.notice && (
                  <Alert
                    style={{ marginBottom: 24 }}
                    message={this.state.notice}
                    type="error"
                    showIcon
                    closable
                    onClose={this.handleClose}
                  />
                )}
                <UserName name="username" placeholder={t('username')} />
                <Password name="password" placeholder={t('password')} />
                <Submit>{t('submit')}</Submit>
              </Login>
            </Main>
          </Content>
          <GlobalFooter />
        </Container>
      </Spin>
    );
  }
}

export default withNamespaces('auth')(withRouter(container(LoginPage)));
