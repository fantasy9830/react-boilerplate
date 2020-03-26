import api from '../requests/api';

// fetch user list
export const fetchUsers = async () => await api.get('/users');

// fetch role list
export const fetchRoles = async () => await api.get('/roles');

// fetch permission list
export const fetchPermissions = async () => await api.get('/permissions');

// fetch user role
export const fetchUserRoles = async (id) => await api.get(`/users/${id}/roles`);

// fetch user permission
export const fetchUserPermissions = async (id) =>
  await api.get(`/users/${id}/permissions`);

// 設定 user 的 role 相關資料
export const syncUserRoles = async (id, roles) =>
  await api.put(`/users/${id}/roles`, roles);
