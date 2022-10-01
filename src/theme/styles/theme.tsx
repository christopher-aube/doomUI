import * as vars from './variables.css';
import * as typography from './typography.css';
import * as dark from './theme-dark.css';
import * as light from './theme-light.css';
import * as utils from '../utils';

const varsKeys = Object.keys(vars);
const typeKeys = Object.keys(typography);
const darkKeys = Object.keys(dark);
const lightKeys = Object.keys(light);

export const lookup = (style: string) => {
  const [isVar, varName] = utils.searchStyles(style, varsKeys, vars);

  if (isVar) {
    return varName;
  }

  const [isType, typeName] = utils.searchStyles(style, typeKeys, typography);

  if (isType) {
    return typeName;
  }

  const [isDark, darkName] = utils.searchStyles(style, darkKeys, dark);

  if (isDark) {
    return darkName;
  }

  const [isLight, lightName] = utils.searchStyles(style, lightKeys, light);

  if (isDark) {
    return darkName;
  }

  return '';
};

export default {
  lookup,
  vars,
  typography,
  dark,
  light,
};
