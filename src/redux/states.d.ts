declare module 'StoreState' {
  export interface ILayout {
    collapsed: boolean;
    notice: any[];
    current: string;
    openKeys: string[];
  }

  export interface IUser {
    loggedIn: boolean;
    id: number;
    name: string;
    username: string;
    email: string;
    address: string;
    token: null;
    roles: string[];
    permissions: object;
  }
}
