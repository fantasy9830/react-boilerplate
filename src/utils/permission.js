/**
 * 有權限的節點，authority屬性設為true
 * @param {array} tree - 樹狀結構
 * @param {array} permissions - 權限
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
