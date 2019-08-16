import React from 'react';
import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Forbidden = () => {
  const [t] = useTranslation('exception');

  return (
    <Result
      title="403"
      status="403"
      subTitle={t('403')}
      style={{ background: 'none' }}
      extra={
        <Link to="/">
          <Button type="primary">{t('back')}</Button>
        </Link>
      }
    />
  );
};

export default Forbidden;
