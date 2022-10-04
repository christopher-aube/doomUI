import React, { useState } from 'react';
import { PageConfigs } from './app.types';
import * as pageConfigs from '../pages';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Theme, Button } from '../../../src';

const homePageRoute = pageConfigs.Palette.Path;

export const App = () => {
  const [theme, setTheme] = useState<Theme.Themes>('light');
  const configs = pageConfigs as PageConfigs;
  const configKeys = Object.keys(configs);

  const handlerTheme = () => {
    const themeToggle = theme === 'light' ? 'dark' : 'light';

    setTheme(themeToggle);
  };

  return (
    <Theme.Provider theme={theme}>
      <Button className="theme-btn text-lg" onClick={handlerTheme}>Toggle Theme: {theme}</Button>
      <Router>
        <main>
          <Routes>
            {
              configKeys.map((name: string, idx: number) => {
                const path = pageConfigs[name].Path;
                const Page = pageConfigs[name].Page;
                
                return <Route key={idx} path={path} element={<Page />} />
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
