import StoreState from 'StoreState';

// Action Type
export const CHANGE_ACTIVE = 'layout/CHANGE_ACTIVE';
export const CLEAR_NOTICE = 'layout/CLEAR_NOTICE';
export const CLEAR_OPENKEYS = 'layout/CLEAR_OPENKEYS';
export const COLLAPSE = 'layout/COLLAPSE';
export const SET_OPENKEYS = 'layout/SET_OPENKEYS';

export type CHANGE_ACTIVE = typeof CHANGE_ACTIVE;
export type CLEAR_NOTICE = typeof CLEAR_NOTICE;
export type CLEAR_OPENKEYS = typeof CLEAR_OPENKEYS;
export type COLLAPSE = typeof COLLAPSE;
export type SET_OPENKEYS = typeof SET_OPENKEYS;

export type Types =
  | CHANGE_ACTIVE
  | CLEAR_NOTICE
  | CLEAR_OPENKEYS
  | COLLAPSE
  | SET_OPENKEYS;

// Action Creators
export const actions = {
  /**
   * 設定sider menu目前展開的欄位
   * @param keys - 目前展開的欄位值
   */
  setOpenKeys(keys: string[]) {
    return {
      type: SET_OPENKEYS,
      keys,
    };
  },

  /**
   * 清空sider menu展開的欄位
   */
  clearOpenKeys() {
    return {
      type: CLEAR_OPENKEYS,
    };
  },

  /**
   * 改變sidebar所在的位置
   * @param current - 現在頁面所在位置
   */
  changeActive(current: string) {
    return {
      type: CHANGE_ACTIVE,
      current,
    };
  },

  /**
   * 摺疊sidebar
   * @param collapsed - 是否摺疊
   */
  collapse(collapsed: boolean) {
    return {
      type: COLLAPSE,
      collapsed,
    };
  },

  /**
   * 清空通知訊息
   * @param noticeType - 類型 notice/message/todo
   */
  clearNotice(noticeType: string) {
    return {
      type: CLEAR_NOTICE,
      noticeType,
    };
  },
};

const initialState = {
  collapsed: false,
  notice: [],
  current: 'home',
  openKeys: [],
};

// reducer
export default (
  state: StoreState.ILayout = initialState,
  action: IAction<Types>,
): StoreState.ILayout => {
  switch (action.type) {
    case SET_OPENKEYS:
      return {
        ...state,
        openKeys: action.keys,
      };

    case CLEAR_OPENKEYS:
      return {
        ...state,
        openKeys: [],
      };

    case CHANGE_ACTIVE:
      return {
        ...state,
        current: action.current,
      };

    case COLLAPSE:
      return {
        ...state,
        collapsed: action.collapsed,
      };

    case CLEAR_NOTICE:
      return {
        ...state,
        notice: state.notice.filter(item => item.type !== action.noticeType),
      };

    default:
      return state;
  }
};
