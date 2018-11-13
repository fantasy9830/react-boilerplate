// Action Type
export const types = {
  CHANGE_ACTIVE: 'layout/CHANGE_ACTIVE',
  CLEAR_NOTICE: 'layout/CLEAR_NOTICE',
  CLEAR_OPENKEYS: 'layout/CLEAR_OPENKEYS',
  COLLAPSE: 'layout/COLLAPSE',
  SET_OPENKEYS: 'layout/SET_OPENKEYS',
};

// Action Creators
export const actions = {
  /**
   * 設定sider menu目前展開的欄位
   * @param {array} keys - 目前展開的欄位值
   */
  setOpenKeys(keys) {
    return {
      type: types.SET_OPENKEYS,
      keys,
    };
  },

  /**
   * 改變sidebar所在的位置
   * @param {string} current - 現在頁面所在位置
   */
  changeActive(current) {
    return {
      type: types.CHANGE_ACTIVE,
      current,
    };
  },

  /**
   * 摺疊sidebar
   * @param {bool} collapsed - 是否摺疊
   */
  collapse(collapsed) {
    return {
      type: types.COLLAPSE,
      collapsed,
    };
  },

  /**
   * 清空通知訊息
   * @param {string} noticeType - 類型 notice/message/todo
   */
  clearNotice(noticeType) {
    return {
      type: types.CLEAR_NOTICE,
      noticeType,
    };
  },

  /**
   * 清空sider menu展開的欄位
   */
  clearOpenKeys() {
    return {
      type: types.CLEAR_OPENKEYS,
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
export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_OPENKEYS:
      return {
        ...state,
        openKeys: action.keys,
      };

    case types.CHANGE_ACTIVE:
      return {
        ...state,
        current: action.current,
      };

    case types.COLLAPSE:
      return {
        ...state,
        collapsed: action.collapsed,
      };

    case types.CLEAR_NOTICE:
      return {
        ...state,
        notice: state.notice.filter(item => item.type !== action.noticeType),
      };

    case types.CLEAR_OPENKEYS:
      return {
        ...state,
        openKeys: [],
      };

    default:
      return state;
  }
};
