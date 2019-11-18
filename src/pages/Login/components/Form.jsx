import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'antd';
import { Login } from 'ant-design-pro';
import { useTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import { Main } from './style';
import container from './container';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const { UserName, Password, Submit } = Login;

const LoginForm = props => {
  let loginForm = null;
  const [t] = useTranslation('auth');
  const [notice, setNotice] = useState('');
  const [loading, setLoading] = useState(false);
  const prevProps = useRef(props);

  useEffect(() => {
    if (prevProps.current.user.isLogged) {
      prevProps.current.history.push('/');
    }
  }, []);

  async function handleSubmit(err, { username, password }) {
    if (!err) {
      NProgress.start();
      setLoading(true);

      const { status, statusText } = await props.login(username, password);

      setLoading(false);
      NProgress.done();

      if (status === 200) {
        const pathname =
          (props.location.state.from && props.location.state.from.pathname) ||
          '/';

        props.history.push(pathname);
      } else if (statusText) {
        setNotice(statusText);
      }
    }
  }

  function handleClose() {
    setNotice('');
  }

  return (
    <Main>
      <Login
        onSubmit={handleSubmit}
        ref={form => {
          loginForm = form;
        }}
      >
        {notice && (
          <Alert
            style={{ marginBottom: 24 }}
            message={notice}
            type="error"
            showIcon
            closable
            onClose={handleClose}
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
          onPressEnter={() => loginForm.validateFields(handleSubmit)}
        />
        <Submit loading={loading} style={{ width: '100%', marginTop: '16px' }}>
          {t('submit')}
        </Submit>
      </Login>
    </Main>
  );
};

LoginForm.prototype = {
  login: PropTypes.func.isRequired,
};

export default withRouter(container(LoginForm));
