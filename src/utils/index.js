/**
 * 將樹攤平
 * @param {array} tree - 樹狀結構
 */
export const flatten = (tree = []) => {
  return tree.reduce((list, node) => {
    if (node.path && node.component) {
      list.push(node);
    } else if (node.children) {
      flatten(node.children).forEach(leaf => list.push(leaf));
    }

    return list;
  }, []);
};
