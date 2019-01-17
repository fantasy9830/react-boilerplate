import React from 'react';
import { Alert } from 'antd';
import { Login } from 'ant-design-pro';
import { withNamespaces } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import { Main } from './style';
import container from './container';

const { UserName, Password, Submit } = Login;

class LoginForm extends React.Component {
  state = {
    notice: '',
    loading: false,
  };

  handleSubmit = async (err, { username, password }) => {
    if (!err) {
      this.setState(() => ({ loading: true }));

      const res = await this.props.login(username, password);

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

  componentDidMount() {
    if (this.props.user.login) {
      this.props.history.push('/');
    }
  }

  render() {
    const { t } = this.props;
    const { notice, loading } = this.state;

    return (
      <Main>
        <Login
          onSubmit={this.handleSubmit}
          ref={form => {
            this.loginForm = form;
          }}
        >
          {notice && (
            <Alert
              style={{ marginBottom: 24 }}
              message={notice}
              type="error"
              showIcon
              closable
              onClose={this.handleClose}
            />
          )}
          <UserName
            name="username"
            placeholder={t('username')}
            readOnly={loading}
          />
          <Password
            name="password"
            placeholder={t('password')}
            readOnly={loading}
            onPressEnter={() =>
              this.loginForm.validateFields(this.handleSubmit)
            }
          />
          <Submit
            loading={loading}
            style={{ width: '100%', marginTop: '16px' }}
          >
            {t('submit')}
          </Submit>
        </Login>
      </Main>
    );
  }
}

export default withNamespaces('auth')(withRouter(container(LoginForm)));
