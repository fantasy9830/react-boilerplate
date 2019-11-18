import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Table, Card, Divider, Button, Modal, Spin, message } from 'antd';
import { useTranslation } from 'react-i18next';
import container from './components/container';
import RolesTransfer from './components/RolesTransfer';
import { fetchUserRoles, syncUserRoles } from '../../api/admin';

const { confirm } = Modal;

const Users = ({ admin, getUsers, getRoles, getPermissions }) => {
  const [t] = useTranslation('admin');
  const [loading, setLoading] = useState(false);
  const [spinning, setSpinning] = useState(false);
  const [user, setUser] = useState({
    id: 0,
    username: '',
  });
  const [roles, setRoles] = useState([]);
  const [rolesVisible, setRolesVisible] = useState(false);
  //const [permissionVisible, setPermissionVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await Promise.all([getUsers(), getRoles(), getPermissions()]);
      setLoading(false);
    };

    fetchData();
  }, [getUsers, getRoles, getPermissions]);

  const handleRoles = async record => {
    setUser(record);
    setRolesVisible(true);
    setSpinning(true);
    const { data } = await fetchUserRoles(record.id);
    setRoles(data.map(v => v.toString()));
    setSpinning(false);
  };

  const handleChange = targetKeys => setRoles(targetKeys);

  const handleSave = () => {
    confirm({
      title: '確定修改 Role?',
      content: '確定修改 Role?',
      onOk: async () => {
        setSpinning(true);

        try {
          await syncUserRoles(user.id, roles);
          message.success('更新成功');
        } catch (error) {
          message.error('更新失敗');
        }

        setSpinning(false);
        setRolesVisible(false);
      },
    });
  };

  const columns = [
    {
      title: t('users.columns.id'),
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: t('users.columns.username'),
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: t('users.columns.name'),
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: t('users.columns.nickname'),
      dataIndex: 'nickname',
      key: 'nickname',
    },
    {
      title: t('users.columns.gender'),
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: t('users.columns.email'),
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: t('users.columns.action'),
      dataIndex: 'action',
      key: 'action',
      render: (text, record) => (
        <span>
          <Button type="link">Edit</Button>
          <Divider type="vertical" />
          <Button type="link" onClick={() => handleRoles(record)}>
            Roles
          </Button>
          <Divider type="vertical" />
          <Button type="link">Permission</Button>
          <Divider type="vertical" />
          <Button type="link">Delete</Button>
        </span>
      ),
    },
  ];

  return (
    <Card>
      <Table
        rowKey="id"
        bordered
        loading={loading}
        columns={columns}
        dataSource={admin.users}
      />

      <Modal
        title={user.username}
        visible={rolesVisible}
        onOk={handleSave}
        onCancel={() => setRolesVisible(false)}
        okText="確認"
        cancelText="取消"
      >
        <Spin spinning={spinning}>
          <RolesTransfer
            source={admin.roles}
            target={roles}
            onChange={handleChange}
          />
        </Spin>
      </Modal>
    </Card>
  );
};

Users.prototype = {
  admin: PropTypes.shape({
    users: PropTypes.arrayOf(PropTypes.object).isRequired,
    roles: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
  getUsers: PropTypes.func.isRequired,
  getRoles: PropTypes.func.isRequired,
  getPermissions: PropTypes.func.isRequired,
};

export default container(Users);
