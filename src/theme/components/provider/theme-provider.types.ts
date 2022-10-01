import React from 'react';

export type Themes = 'light' | 'dark';

export interface ThemeProviderProps
  extends React.AllHTMLAttributes<HTMLDivElement> {
  theme?: Themes;
}
