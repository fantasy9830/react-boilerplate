declare module 'StoreState' {
  export interface ILayout {
    collapsed: boolean;
    notice: any[];
    current: string;
    openKeys: string[];
  }

  export interface IUser {
    isLogged: boolean;
    id: number;
    nickname: string;
    token: string | null;
    roles: string[];
    permissions: object;
  }
}
