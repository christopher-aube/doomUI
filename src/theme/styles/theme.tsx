import * as theme from './_index.scss';
import * as utils from '../utils';

const styleKeys = Object.keys(theme);

export const styles = theme;

export const lookup = (style: string) => {
  const [hasStyle, styleName] = utils.searchStyles(style, styleKeys, styles);

  if (hasStyle) {
    return styleName;
  }

  return '';
};

export default {
  lookup,
  styles,
};
