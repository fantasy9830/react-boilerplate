import React, { useState, useEffect } from 'react';
import { Alert } from 'antd';
import { Login } from 'ant-design-pro';
import { useTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import { Main } from './style';
import container from './container';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import StoreState from 'StoreState';

const { UserName, Password, Submit }: any = Login;

export interface IProps {
  user: StoreState.IUser;
  history: any;
  location: any;
  login(username: string, password: string): any;
}

export interface IFromProps {
  username: string;
  password: string;
}

const LoginForm = (props: IProps) => {
  let loginForm: any = null;
  const [t] = useTranslation('auth');
  const [notice, setNotice] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (props.user.loggedIn) {
      props.history.push('/');
    }
  }, []);

  async function handleSubmit(err: any, { username, password }: IFromProps) {
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

export default withRouter<any>(container(LoginForm));
