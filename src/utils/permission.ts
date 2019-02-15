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
