export const searchStyles = (
  style: string,
  list: Array<string>,
  dict: { [key: string]: string }
) => {
  let isFound = false;
  let styleName = '';

  for (let i = 0, ii = list.length; i < ii; i++) {
    if (list[i] === style) {
      styleName = dict[list[i]];
      isFound = true;
      break;
    }

    if (dict[list[i]] === style) {
      styleName = dict[list[i]];
      isFound = true;
      break;
    }
  }

  return [isFound, styleName];
};

export default {
  searchStyles,
};
