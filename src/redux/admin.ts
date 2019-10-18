import StoreState from 'StoreState';
import { fetchUsers, fetchRoles, fetchPermissions } from './../api/admin';

// Action Type
export const GET_USERS = 'admin/GET_USERS';
export const GET_ROLES = 'admin/GET_ROLES';
export const GET_PERMISSIONS = 'admin/GET_PERMISSIONS';

export type GET_USERS = typeof GET_USERS;
export type GET_ROLES = typeof GET_ROLES;
export type GET_PERMISSIONS = typeof GET_PERMISSIONS;

export type ActionTypes = GET_USERS | GET_ROLES | GET_PERMISSIONS;

export type Dispatch = IDispatch<IAction<ActionTypes>>;

// Action Creators
/**
 * 抓取user list
 */
export const getUsers = () => {
  return async (dispatch: Dispatch) => {
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
  return async (dispatch: Dispatch) => {
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
  return async (dispatch: Dispatch) => {
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
export default (
  state: StoreState.IAdmin = initialState,
  action: IAction<ActionTypes>,
): StoreState.IAdmin => {
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
