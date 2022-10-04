import React from 'react';
import { FilterCapitailizeProps } from './filter.types';

export const Capitialize = ({ value }: FilterCapitailizeProps) => {
  const formatted = !value ? '' : value
    .toLowerCase()
    .replace(
      /([^a-z])([a-z])(?=[a-z]{2})|^([a-z])/g,
      (fullMatch: string, group1: string, group2: string, group3: string) => {
        return (typeof group1 === 'undefined') ? group3.toUpperCase() : group1 + group2.toUpperCase();
      }
     );
  return <>{formatted}</>
};

export default {
  Capitialize,
};
