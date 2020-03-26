import { token, refresh, getProfile } from '../api/user';
import { getUserState, TokenStorage } from '../utils/auth';

// Action Type
export const LOG_IN = 'user/LOG_IN';
export const LOG_OUT = 'user/LOG_OUT';
export const SET_PROFILE = 'user/SET_PROFILE';
export const SET_ROLES = 'user/SET_ROLES';
export const SET_PERMISSIONS = 'user/SET_PERMISSIONS';
export const REFRESH_TOKEN = 'user/REFRESH_TOKEN';

// Action Creators
/**
 * 登入
 * @param username - 帳號
 * @param password - 密碼
 */
export const login = (username, password) => {
  return async (dispatch) => {
    try {
      const res = await token(username, password);

      if (res.data && res.data.access_token) {
        dispatch({
          type: LOG_IN,
          token: res.data.access_token,
        });

        TokenStorage.setToken(res.data.access_token);

        const response = await getProfile();

        dispatch({
          type: SET_PROFILE,
          id: response.data.id,
          nickname: response.data.nickname,
          roles: response.data.roles,
          permissions: response.data.permissions,
        });

        return {
          status: res.status,
          statusText: res.statusText,
        };
      }
    } catch (error) {
      if (error.response) {
        return {
          status: error.response.status,
          statusText: error.response.data.error_description,
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
  return (dispatch) => {
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
export const refreshToken = (token) => {
  return async (dispatch, getState) => {
    if (!token) {
      const res = await refresh(getState().user.token);
      token = res.data.access_token;
    }

    if (token) {
      dispatch({
        type: REFRESH_TOKEN,
        token,
      });

      TokenStorage.setToken(token);

      const response = await getProfile();

      dispatch({
        type: SET_PROFILE,
        id: response.data.id,
        nickname: response.data.nickname,
        roles: response.data.roles,
        permissions: response.data.permissions,
      });
    }
  };
};

/**
 * 取得個人資料
 */
export const setProfile = () => {
  return async (dispatch) => {
    const response = await getProfile();

    dispatch({
      type: SET_PROFILE,
      id: response.data.id,
      nickname: response.data.nickname,
      roles: response.data.roles,
      permissions: response.data.permissions,
    });
  };
};

// state
const initialState = getUserState({
  isLogged: false,
  id: 0,
  nickname: '',
  token: '',
  roles: [],
  permissions: {},
});

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        isLogged: true,
        token: action.token,
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

    case SET_PROFILE:
      return {
        ...state,
        id: action.id,
        nickname: action.nickname,
        roles: action.roles,
        permissions: action.permissions,
      };

    case REFRESH_TOKEN:
      return {
        ...state,
        isLogged: true,
        token: action.token,
      };

    default:
      return state;
  }
};
