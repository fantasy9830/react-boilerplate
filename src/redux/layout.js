// Action Type
export const CHANGE_ACTIVE = 'layout/CHANGE_ACTIVE';
export const CLEAR_NOTICE = 'layout/CLEAR_NOTICE';
export const CLEAR_OPENKEYS = 'layout/CLEAR_OPENKEYS';
export const COLLAPSE = 'layout/COLLAPSE';
export const SET_OPENKEYS = 'layout/SET_OPENKEYS';

// Action Creators
/**
 * 設定sider menu目前展開的欄位
 * @param keys - 目前展開的欄位值
 */
export const setOpenKeys = keys => {
  return {
    type: SET_OPENKEYS,
    keys,
  };
};

/**
 * 清空sider menu展開的欄位
 */
export const clearOpenKeys = () => {
  return {
    type: CLEAR_OPENKEYS,
  };
};

/**
 * 改變sidebar所在的位置
 * @param current - 現在頁面所在位置
 */
export const changeActive = current => {
  return {
    type: CHANGE_ACTIVE,
    current,
  };
};

/**
 * 摺疊sidebar
 * @param collapsed - 是否摺疊
 */
export const collapse = collapsed => {
  return {
    type: COLLAPSE,
    collapsed,
  };
};

/**
 * 清空通知訊息
 * @param noticeType - 類型 notice/message/todo
 */
export const clearNotice = noticeType => {
  return {
    type: CLEAR_NOTICE,
    noticeType,
  };
};

// state
const initialState = {
  collapsed: false,
  notice: [],
  current: 'home',
  openKeys: [],
};

// reducer
export default (state = initialState, action) => {
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
