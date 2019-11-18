import { fetchUsers, fetchRoles, fetchPermissions } from '../api/admin';

// Action Type
export const GET_USERS = 'admin/GET_USERS';
export const GET_ROLES = 'admin/GET_ROLES';
export const GET_PERMISSIONS = 'admin/GET_PERMISSIONS';

// Action Creators
/**
 * 抓取user list
 */
export const getUsers = () => {
  return async dispatch => {
    const { data } = await fetchUsers();

    dispatch({
      type: GET_USERS,
      users: data,
    });
  };
};

/**
 * 抓取roles list
 */
export const getRoles = () => {
  return async dispatch => {
    const { data } = await fetchRoles();

    dispatch({
      type: GET_ROLES,
      roles: data,
    });
  };
};

/**
 * 抓取permissions list
 */
export const getPermissions = () => {
  return async dispatch => {
    const { data } = await fetchPermissions();

    dispatch({
      type: GET_PERMISSIONS,
      permissions: data,
    });
  };
};

// state
const initialState = {
  users: [],
  roles: [],
  permissions: [],
};

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.users,
      };

    case GET_ROLES:
      return {
        ...state,
        roles: action.roles,
      };

    case GET_PERMISSIONS:
      return {
        ...state,
        permissions: action.permissions,
      };

    default:
      return state;
  }
};
