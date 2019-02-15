declare interface Window {
  __REDUX_DEVTOOLS_EXTENSION__: any;
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
}

declare interface IAction<T = any> {
  type: T;
  [extraProps: string]: any;
}

declare interface IDispatch<A extends IAction> {
  <T extends A>(action: T): T
}

declare interface IStoreState {
  [extraProps: string]: any;
}

declare interface IClaims {
  jti: number;
  name: string;
  username: string;
  email: string;
  address: string;
  roles: string[];
  permissions: object;
  exp: number;
}

declare interface IMenus {
  key: string;
  name: string;
  authority?: boolean;
  icon?: any;
  path?: string;
  component?: any;
  children?: IMenus[];
}
