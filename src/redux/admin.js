import { fetchUsers, fetchRoles, fetchPermissions } from '../api/admin';

// Action Type
export const SET_USERS = 'admin/SET_USERS';
export const SET_ROLES = 'admin/SET_ROLES';
export const SET_PERMISSIONS = 'admin/SET_PERMISSIONS';

// Action Creators
/**
 * set user list
 */
export const setUsers = () => {
  return async dispatch => {
    const { data } = await fetchUsers();

    dispatch({
      type: SET_USERS,
      users: data,
    });
  };
};

/**
 * set roles list
 */
export const setRoles = () => {
  return async dispatch => {
    const { data } = await fetchRoles();

    dispatch({
      type: SET_ROLES,
      roles: data,
    });
  };
};

/**
 * set permissions list
 */
export const setPermissions = () => {
  return async dispatch => {
    const { data } = await fetchPermissions();

    dispatch({
      type: SET_PERMISSIONS,
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
    case SET_USERS:
      return {
        ...state,
        users: action.users,
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
