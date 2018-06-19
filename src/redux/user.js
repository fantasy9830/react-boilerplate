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
        await new Promise(resolve => setTimeout(resolve, 1000));

        dispatch({
          type: types.LOGIN,
          id: '001',
          name: 'Ricky',
          token: 'token!!!',
        });

        localStorage.setItem('token', 'token!!!');

        return {
          status: 200,
          statusText: 'success',
        };
      } catch (error) {
        return {
          status: 500,
          statusText: 'fail',
        };
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

      localStorage.removeItem('token');
    };
  },
};

const initialState = {
  login: false,
  id: 0,
  name: '',
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
        token: action.token,
      };

    case types.LOGOUT:
      return {
        ...state,
        id: 0,
        login: false,
        name: '',
        token: null,
      };

    default:
      return state;
  }
};
