import Cookies from 'js-cookie';

export class TokenStorage {
  static key = '@Ricky:token';

  /**
   * get token
   */
  static getToken() {
    return Cookies.get(TokenStorage.key);
  }

  /**
   * set token
   * @param token - token
   */
  static setToken(token) {
    return Cookies.set(TokenStorage.key, token);
  }

  /**
   * remove token
   */
  static removeToken() {
    return Cookies.remove(TokenStorage.key);
  }
}

/**
 * 有權限的節點，authority屬性設為true
 * @param tree - 樹狀結構
 * @param permissions - 權限
 */
export const setAuthority = (tree, permissions) => {
  return tree.map(item => {
    if (item.path && item.component) {
      item.authority = permissions.indexOf(item.key) >= 0;
    } else if (item.children) {
      item.authority = setAuthority(item.children, permissions).some(
        child => child.authority,
      );
    }

    return item;
  });
};

/**
 * 取得user的state
 * @param initialState - user的初始state
 */
export const getUserState = initialState => {
  const token = TokenStorage.getToken();
  if (token) {
    initialState.isLogged = true;
    initialState.token = token;
  }

  return initialState;
};

export const authorized = authority => {
  return (permissions, component, exception) => {
    return permissions.indexOf(authority) > -1 ? component : exception;
  };
};
