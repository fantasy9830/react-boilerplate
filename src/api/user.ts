import api from './../requests/api';

export const token = async (username: string, password: string) =>
  await api.post('/auth/token', {
    grant_type: 'password',
    username,
    password,
  });

export const refresh = async (token: string) =>
  await api.post('/auth/token', {
    grant_type: 'refresh_token',
    refresh_token: token,
  });

export const profile = async () => await api.get('/user/profile');
