import auth from './../requests/auth';
import localforage from 'localforage';
import jwtDecode from 'jwt-decode';

// Action Type
export const types = {
  LOGIN: 'user/LOGIN',
  LOGOUT: 'user/LOGOUT',
  SET_ROLES: 'user/SET_ROLES',
  SET_PERMISSIONS: 'user/SET_PERMISSIONS',
};

// Action Creators
export const actions = {
  /**
   * 登入
   * @param {string} username - 帳號
   * @param {string} password - 密碼
   */
  login(username, password) {
    return async dispatch => {
      try {
        const res = await auth.post('/signin', { username, password });

        if (res.data && res.data.token) {
          const decoded = jwtDecode(res.data.token);
          dispatch({
            type: types.LOGIN,
            id: decoded.jti,
            name: decoded.name,
            username: decoded.username,
            email: decoded.email,
            address: decoded.address,
            token: res.data.token,
            roles: decoded.roles,
            permissions: decoded.permissions,
          });

          localforage.setItem('@Ricky:token', res.data.token);

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
  },

  /**
   * 登出
   */
  logout() {
    return dispatch => {
      dispatch({
        type: types.LOGOUT,
      });

      localforage.removeItem('@Ricky:token');
    };
  },

  /**
   * Get Roles
   */
  getRoles() {
    return async dispatch => {
      const { data } = await auth.get(`/roles/${process.env.REACT_APP_SYSTEM_NAME}`);

      dispatch({
        type: types.SET_ROLES,
        roles: data.roles,
      });
    };
  },

  /**
   * Get Permissions
   */
  getPermissions() {
    return async dispatch => {
      const { data } = await auth.get(`/permissions/${process.env.REACT_APP_SYSTEM_NAME}`);

      dispatch({
        type: types.SET_PERMISSIONS,
        permissions: data.permissions,
      });
    };
  },
};

const initialState = {
  login: false,
  id: '',
  name: '',
  username: '',
  email: '',
  address: '',
  token: null,
  roles: [],
  permissions: {},
};

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        id: action.id,
        login: true,
        name: action.name,
        username: action.username,
        email: action.email,
        address: action.address,
        token: action.token,
        roles: action.roles,
        permissions: action.permissions,
      };

    case types.LOGOUT:
      return {
        ...state,
        id: 0,
        login: false,
        name: '',
        username: '',
        email: '',
        address: '',
        token: null,
        roles: [],
        permissions: {},
      };

    case types.SET_ROLES:
      return {
        ...state,
        roles: action.roles,
      };

    case types.SET_PERMISSIONS:
      return {
        ...state,
        permissions: action.permissions,
      };

    default:
      return state;
  }
};
