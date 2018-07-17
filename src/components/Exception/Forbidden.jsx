import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { translate } from 'react-i18next';
import Exception from 'ant-design-pro/lib/Exception';

const Forbidden = props => (
  <Exception
    type="403"
    desc={props.t('403')}
    actions={
      <Link to="/">
        <Button type="primary">{props.t('back')}</Button>
      </Link>
    }
  />
);

export default translate('exception')(Forbidden);
