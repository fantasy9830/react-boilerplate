import api from '../requests/api';

// 抓取 user list
export const fetchUsers = async () => await api.get('/users');

// 抓取 role list
export const fetchRoles = async () => await api.get('/roles');

// 抓取 permission list
export const fetchPermissions = async () => await api.get('/permissions');

// 抓取 user 的 role 相關資料
export const fetchUserRoles = async id => await api.get(`/users/${id}/roles`);

// 抓取 user 的 permission 相關資料
export const fetchUserPermissions = async id =>
  await api.get(`/users/${id}/permissions`);

// 設定 user 的 role 相關資料
export const syncUserRoles = async (id, roles) =>
  await api.put(`/users/${id}/roles`, roles);