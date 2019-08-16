import React from 'react';
import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NoMatch = () => {
  const [t] = useTranslation('exception');

  return (
    <Result
      title="404"
      status="404"
      subTitle={t('404')}
      style={{ background: 'none' }}
      extra={
        <Link to="/">
          <Button type="primary">{t('back')}</Button>
        </Link>
      }
    />
  );
};

export default NoMatch;
