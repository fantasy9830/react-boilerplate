import React from 'react';
import { Transfer } from 'antd';

export interface IProps {
  source: any[];
  target: string[] | undefined;
  onChange: any | undefined;
}

const RolesTransfer = ({ source, target, onChange }: IProps) => (
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

export default RolesTransfer;
