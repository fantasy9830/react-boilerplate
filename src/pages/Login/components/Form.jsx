import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Alert, Form, Input, Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { Main } from './style';
import { login } from './../../../redux/user';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const LoginForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const location = useLocation();
  const [t] = useTranslation('auth');
  const [notice, setNotice] = useState('');
  const [loading, setLoading] = useState(false);
  const prevUser = useRef(user);

  useEffect(() => {
    if (prevUser.current.isLogged) {
      history.push('/');
    }
  }, [history, user]);

  async function handleSubmit({ username, password }) {
    NProgress.start();
    setLoading(true);
    const { status, statusText } = await dispatch(login(username, password));
    setLoading(false);
    NProgress.done();

    if (status === 200) {
      const pathname =
        (location.state.from && location.state.from.pathname) || '/';

      history.push(pathname);
    } else if (statusText) {
      setNotice(statusText);
    }
  }

  function handleClose() {
    setNotice('');
  }

  return (
    <Main>
      <Form name="loginform" onFinish={handleSubmit}>
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

        <Form.Item
          name="username"
          rules={[{ required: true, message: t('username') }]}
        >
          <Input placeholder={t('username')} readOnly={loading} />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: t('password') }]}
        >
          <Input.Password placeholder={t('password')} readOnly={loading} />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{ width: '100%', marginTop: '16px' }}
          >
            {t('submit')}
          </Button>
        </Form.Item>
      </Form>
    </Main>
  );
};

LoginForm.prototype = {
  login: PropTypes.func.isRequired,
};

export default LoginForm;
