/**
 * 將樹攤平
 * @param tree - 樹狀結構
 */
export const flatten = (tree: IMenus[] = []): IMenus[] => {
  return tree.reduce((list: IMenus[], node: IMenus) => {
    if (node.path && node.component) {
      list.push(node);
    } else if (node.children) {
      flatten(node.children).forEach(leaf => list.push(leaf));
    }

    return list;
  }, []);
};
