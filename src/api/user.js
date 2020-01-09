import api from '../requests/api';

export const token = async (username, password) =>
  await api.post('/auth/token', {
    grant_type: 'password',
    username,
    password,
  });

export const refresh = async token =>
  await api.post('/auth/token', {
    grant_type: 'refresh_token',
    refresh_token: token,
  });

export const getProfile = async () => await api.get('/user/profile');
