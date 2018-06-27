import auth from './../requests/auth';
import jwtDecode from 'jwt-decode';

// Action Type
export const types = {
  LOGIN: 'user/LOGIN',
  LOGOUT: 'user/LOGOUT',
};

// Action
export const actions = {
  /**
   * 登入
   * @param {string} username 帳號
   * @param {string} password 密碼
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

      localStorage.removeItem('@Ricky:token');
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
      };

    default:
      return state;
  }
};
