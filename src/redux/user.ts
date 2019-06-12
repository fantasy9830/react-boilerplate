import api from './../requests/api';
import jwtDecode from 'jwt-decode';
import StoreState from 'StoreState';
import { getUserState, TokenStorage } from './../utils/auth';

// Action Type
export const LOG_IN = 'user/LOG_IN';
export const LOG_OUT = 'user/LOG_OUT';
export const SET_ROLES = 'user/SET_ROLES';
export const SET_PERMISSIONS = 'user/SET_PERMISSIONS';
export const REFRESH_TOKEN = 'user/REFRESH_TOKEN';

export type LOG_IN = typeof LOG_IN;
export type LOG_OUT = typeof LOG_OUT;
export type SET_ROLES = typeof SET_ROLES;
export type SET_PERMISSIONS = typeof SET_PERMISSIONS;
export type REFRESH_TOKEN = typeof REFRESH_TOKEN;

export type ActionTypes =
  | LOG_IN
  | LOG_OUT
  | SET_ROLES
  | SET_PERMISSIONS
  | REFRESH_TOKEN;
export type Dispatch = IDispatch<IAction<ActionTypes>>;

// Action Creators
/**
 * 登入
 * @param username - 帳號
 * @param password - 密碼
 */
export const login = (username: string, password: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const res = await api.post('/auth/token', {
        grant_type: 'password',
        username,
        password,
      });

      if (res.data && res.data.access_token) {
        const decoded: IClaims = jwtDecode(res.data.access_token);

        dispatch({
          type: LOG_IN,
          id: decoded.sub,
          nickname: decoded.nickname,
          token: res.data.access_token,
          roles: decoded.roles,
          permissions: decoded.permissions,
        });

        TokenStorage.setToken(res.data.access_token);

        return {
          status: res.status,
          statusText: res.statusText,
        };
      }
    } catch (error) {
      if (error.response) {
        return {
          status: error.response.status,
          statusText: error.response.data.message,
        };
      } else if (error.request) {
        return {
          status: error.request.status,
          statusText: error.request.statusText === '' && 'no response',
        };
      }
    }
  };
};

/**
 * 登出
 */
export const logout = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: LOG_OUT,
    });

    TokenStorage.removeToken();
  };
};

/**
 * 更新 Token
 * @param token - JWT Token
 */
export const refreshToken = (token: string) => {
  return async (dispatch: Dispatch) => {
    const res = await api.post('/auth/token', {
      grant_type: 'refresh_token',
      refresh_token: token,
    });

    if (res.data && res.data.access_token) {
      const decoded: IClaims = jwtDecode(res.data.access_token);

      dispatch({
        type: REFRESH_TOKEN,
        id: decoded.sub,
        nickname: decoded.nickname,
        token: res.data.access_token,
        roles: decoded.roles,
        permissions: decoded.permissions,
      });

      TokenStorage.setToken(res.data.access_token);
    }
  };
};

// state
const initialState = getUserState({
  isLogged: false,
  id: 0,
  nickname: '',
  token: '',
  roles: [] as string[],
  permissions: {},
});

// reducer
export default (
  state: StoreState.IUser = initialState,
  action: IAction<ActionTypes>,
): StoreState.IUser => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        id: action.id,
        isLogged: true,
        nickname: action.nickname,
        token: action.token,
        roles: action.roles,
        permissions: action.permissions,
      };

    case LOG_OUT:
      return {
        ...state,
        id: 0,
        isLogged: false,
        nickname: '',
        token: '',
        roles: [],
        permissions: {},
      };

    case REFRESH_TOKEN:
      return {
        ...state,
        id: action.id,
        nickname: action.nickname,
        token: action.token,
        roles: action.roles,
        permissions: action.permissions,
      };

    default:
      return state;
  }
};
