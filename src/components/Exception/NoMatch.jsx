import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';
import Exception from 'ant-design-pro/lib/Exception';

const NoMatch = props => (
  <Exception
    type="404"
    desc={props.t('404')}
    actions={
      <Link to="/">
        <Button type="primary">{props.t('back')}</Button>
      </Link>
    }
  />
);

export default withNamespaces('exception')(NoMatch);
