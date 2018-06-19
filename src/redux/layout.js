// Action Type
export const types = {
  CHANGE_ACTIVE: 'layout/CHANGE_ACTIVE',
  CLEAR_NOTICE: 'layout/CLEAR_NOTICE',
  COLLAPSE: 'layout/COLLAPSE',
};

// Action
export const actions = {
  /**
   * 改變sidebar所在的位置
   */
  changeActive(current) {
    return dispatch => {
      dispatch({
        type: types.CHANGE_ACTIVE,
        current,
      });
    };
  },

  /**
   * 摺疊sidebar
   * @param {bool} collapsed - 是否摺疊
   */
  collapse(collapsed) {
    return dispatch => {
      dispatch({
        type: types.COLLAPSE,
        collapsed,
      });
    };
  },

  /**
   * 清空通知訊息
   * @param {string} noticeType 類型 notice/message/todo
   */
  clearNotice(noticeType) {
    return dispatch => {
      dispatch({
        type: types.CLEAR_NOTICE,
        noticeType,
      });
    };
  },
};

const initialState = {
  collapsed: false,
  notice: [],
  sider: {
    current: 'home',
  },
};

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_ACTIVE:
      return {
        ...state,
        sider: {
          ...state.sider,
          current: action.current,
        },
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

    default:
      return state;
  }
};
