import React, { useState } from 'react';
import { PageConfigs, PageConfig } from './app.types';
import * as styles from './_index.scss';
import * as pageConfigs from '../pages';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Theme, Button } from '../../../src';

const homePageRoute = pageConfigs.Palette.Path;

export const App = () => {
  const [theme, setTheme] = useState<Theme.Themes>('light');
  const configs = pageConfigs as PageConfigs;
  const configKeys = Object.keys(configs);
  const classes = `${styles.themeBtn} ${Theme.styles.textLg}`;
  
  const handlerTheme = () => {
    const themeToggle = theme === 'light' ? 'dark' : 'light';

    setTheme(themeToggle);
  };

  return (
    <Theme.Provider theme={theme}>
      <Button
        className={classes}
        onClick={handlerTheme}
        variant="Primary">
          Toggle Theme: {theme}
        </Button>
      <Router>
        <main>
          <Routes>
            {
              configKeys.map((name: string, idx: number) => {
                const config = configs[name];
                
                return <Route key={idx} path={config.Path} element={<config.Page />} />
              })
            }
            <Route path="*" element={<Navigate to={homePageRoute} />} />
          </Routes>
        </main>
      </Router>
    </Theme.Provider>
  );
};

export default {
  App,
};
