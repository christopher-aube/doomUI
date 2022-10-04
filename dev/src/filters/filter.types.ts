export interface FilterCommons {
  value: unknown;
}

export interface FilterCapitailizeProps extends Omit<FilterCommons, 'value'> {
  value: string;
}
