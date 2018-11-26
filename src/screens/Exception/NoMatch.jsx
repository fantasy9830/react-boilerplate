import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';
import { Exception } from 'ant-design-pro';

const NoMatch = ({ t }) => (
  <Exception
    type="404"
    desc={t('404')}
    actions={
      <Link to="/">
        <Button type="primary">{t('back')}</Button>
      </Link>
    }
  />
);

export default withNamespaces('exception')(NoMatch);
