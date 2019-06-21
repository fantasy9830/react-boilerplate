import Cookies from 'js-cookie';
import StoreState from 'StoreState';

export class TokenStorage {
  public static readonly key = '@Ricky:token';

  /**
   * get token
   */
  public static getToken(): string | undefined {
    return Cookies.get(TokenStorage.key);
  }

  /**
   * set token
   * @param token - token
   */
  public static setToken(token: string): void {
    return Cookies.set(TokenStorage.key, token);
  }

  /**
   * remove token
   */
  public static removeToken(): void {
    return Cookies.remove(TokenStorage.key);
  }
}

/**
 * 有權限的節點，authority屬性設為true
 * @param tree - 樹狀結構
 * @param permissions - 權限
 */
export const setAuthority = (
  tree: IMenus[],
  permissions: string[],
): IMenus[] => {
  return tree.map(item => {
    if (item.path && item.component) {
      item.authority = permissions.indexOf(item.key) >= 0;
    } else if (item.children) {
      item.authority = setAuthority(item.children, permissions).some(
        (child: any) => child.authority,
      );
    }

    return item;
  });
};

/**
 * 取得user的state
 * @param initialState - user的初始state
 */
export const getUserState = <T extends StoreState.IUser>(
  initialState: T,
): T => {
  const token = TokenStorage.getToken();
  if (token) {
    initialState.isLogged = true;
    initialState.token = token;
  }

  return initialState;
};
