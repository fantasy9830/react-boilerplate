import auth from './../requests/auth';
import jwtDecode from 'jwt-decode';
import StoreState from 'StoreState';

// Action Type
export const LOG_IN = 'user/LOG_IN';
export const LOG_OUT = 'user/LOG_OUT';
export const SET_ROLES = 'user/SET_ROLES';
export const SET_PERMISSIONS = 'user/SET_PERMISSIONS';

export type LOG_IN = typeof LOG_IN;
export type LOG_OUT = typeof LOG_OUT;
export type SET_ROLES = typeof SET_ROLES;
export type SET_PERMISSIONS = typeof SET_PERMISSIONS;

export type ActionTypes = LOG_IN | LOG_OUT | SET_ROLES | SET_PERMISSIONS;
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
      const res = await auth.post('/login', { username, password });

      if (res.data && res.data.token) {
        const decoded: IClaims = jwtDecode(res.data.token);

        dispatch({
          type: LOG_IN,
          id: decoded.jti,
          name: decoded.name,
          username: decoded.username,
          email: decoded.email,
          address: decoded.address,
          token: res.data.token,
          roles: decoded.roles,
          permissions: decoded.permissions,
        });

        localStorage.setItem('@Ricky:token', res.data.token);

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

    localStorage.removeItem('@Ricky:token');
  };
};

/**
 * Get Roles
 */
export const getRoles = () => {
  return async (dispatch: Dispatch) => {
    const { data } = await auth.get(
      `/roles/${process.env.REACT_APP_SYSTEM_NAME}`,
    );

    dispatch({
      type: SET_ROLES,
      roles: data.roles,
    });
  };
};

/**
 * Get Permissions
 */
export const getPermissions = () => {
  return async (dispatch: Dispatch) => {
    const { data } = await auth.get(
      `/permissions/${process.env.REACT_APP_SYSTEM_NAME}`,
    );

    dispatch({
      type: SET_PERMISSIONS,
      permissions: data.permissions,
    });
  };
};

// state
const initialState = {
  loggedIn: false,
  id: 0,
  name: '',
  username: '',
  email: '',
  address: '',
  token: null,
  roles: [],
  permissions: {},
};

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
        loggedIn: true,
        name: action.name,
        username: action.username,
        email: action.email,
        address: action.address,
        token: action.token,
        roles: action.roles,
        permissions: action.permissions,
      };

    case LOG_OUT:
      return {
        ...state,
        id: 0,
        loggedIn: false,
        name: '',
        username: '',
        email: '',
        address: '',
        token: null,
        roles: [],
        permissions: {},
      };

    case SET_ROLES:
      return {
        ...state,
        roles: action.roles,
      };

    case SET_PERMISSIONS:
      return {
        ...state,
        permissions: action.permissions,
      };

    default:
      return state;
  }
};
