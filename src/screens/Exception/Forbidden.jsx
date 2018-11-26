import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';
import { Exception } from 'ant-design-pro';

const Forbidden = ({ t }) => (
  <Exception
    type="403"
    desc={t('403')}
    actions={
      <Link to="/">
        <Button type="primary">{t('back')}</Button>
      </Link>
    }
  />
);

export default withNamespaces('exception')(Forbidden);
