import { token, refresh, profile } from './../api/user';
import StoreState from 'StoreState';
import { getUserState, TokenStorage } from './../utils/auth';

// Action Type
export const LOG_IN = 'user/LOG_IN';
export const LOG_OUT = 'user/LOG_OUT';
export const GET_PROFILE = 'user/GET_PROFILE';
export const SET_ROLES = 'user/SET_ROLES';
export const SET_PERMISSIONS = 'user/SET_PERMISSIONS';
export const REFRESH_TOKEN = 'user/REFRESH_TOKEN';

export type LOG_IN = typeof LOG_IN;
export type LOG_OUT = typeof LOG_OUT;
export type GET_PROFILE = typeof GET_PROFILE;
export type SET_ROLES = typeof SET_ROLES;
export type SET_PERMISSIONS = typeof SET_PERMISSIONS;
export type REFRESH_TOKEN = typeof REFRESH_TOKEN;

export type ActionTypes =
  | LOG_IN
  | LOG_OUT
  | GET_PROFILE
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
      const res = await token(username, password);

      if (res.data && res.data.access_token) {
        dispatch({
          type: LOG_IN,
          token: res.data.access_token,
        });

        TokenStorage.setToken(res.data.access_token);

        const response = await profile();

        dispatch({
          type: GET_PROFILE,
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
export const refreshToken = (token?: string) => {
  return async (dispatch: Dispatch, getState: () => IStoreState) => {
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

      const response = await profile();

      dispatch({
        type: GET_PROFILE,
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
export const getProfile = () => {
  return async (dispatch: Dispatch) => {
    const response = await profile();

    dispatch({
      type: GET_PROFILE,
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

    case GET_PROFILE:
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
