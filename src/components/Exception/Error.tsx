import React from 'react';
import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Error = () => {
  const [t] = useTranslation('exception');

  return (
    <Result
      title="500"
      status="500"
      subTitle={t('500')}
      style={{ background: 'none' }}
      extra={
        <Link to="/">
          <Button type="primary">{t('back')}</Button>
        </Link>
      }
    />
  );
};

export default Error;
