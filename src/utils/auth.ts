import dayjs from 'dayjs';
import jwtDecode from 'jwt-decode';
import StoreState from 'StoreState';

export class Storage {
  public static readonly key = '@Ricky:token';

  /**
   * get token
   */
  public static getToken(): string | null {
    return localStorage.getItem(Storage.key);
  }


  /**
   * set token
   * @param token - token
   */
  public static setToken(token: string): void {
    localStorage.setItem(Storage.key, token);
  }

  /**
   * remove token
   */
  public static removeToken(): void {
    localStorage.removeItem(Storage.key);
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
  const token = Storage.getToken();
  if (token) {
    const decoded: IClaims = jwtDecode(token);

    // token過期
    if (dayjs.unix(decoded.exp).isBefore(dayjs())) {
      Storage.removeToken();
    } else {
      initialState.loggedIn = true;
      initialState.id = decoded.jti;
      initialState.name = decoded.name;
      initialState.username = decoded.username;
      initialState.email = decoded.email;
      initialState.address = decoded.address;
      initialState.token = token;
      initialState.roles = decoded.roles;
      initialState.permissions = decoded.permissions;
    }
  }

  return initialState;
};
