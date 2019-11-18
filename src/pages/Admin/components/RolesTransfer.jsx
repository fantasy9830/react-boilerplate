import React from 'react';
import PropTypes from 'prop-types';
import { Transfer } from 'antd';

const RolesTransfer = ({ source, target, onChange }) => (
  <Transfer
    dataSource={source.map(item => ({
      key: item.id.toString(),
      title: item.name,
    }))}
    titles={['Source', 'Target']}
    render={item => item.title}
    targetKeys={target}
    onChange={onChange}
  />
);

RolesTransfer.prototype = {
  source: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number,
      title: PropTypes.string,
    }),
  ).isRequired,
  target: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
};

export default RolesTransfer;
