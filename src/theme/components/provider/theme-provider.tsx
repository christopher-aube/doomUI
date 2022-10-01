import React, { useEffect, useState, useRef } from 'react';
import { ThemeProviderProps } from './theme-provider.types';

export const Provider = ({ theme, children, ...props }: ThemeProviderProps) => {
  const [parent, setParent] = useState<HTMLElement>();
  const node = useRef<HTMLDivElement>(null);
  const providerStyle = {
    display: 'none',
    height: 0,
    width: 0,
    top: -1000,
    left: -1000,
    position: 'absolute',
  } as React.StyleHTMLAttributes<HTMLDivElement>;
  const themes: {[key: string]: string} = {
      dark: 'dui__theme--dark',
      light: 'dui__theme--light'
    }
  const themeList = Object.keys(themes).map(themeName => themes[themeName])

  useEffect(() => {
    const isSet = parent;
    const isRefSet = node.current;
    const hasParent = node.current && node.current.parentElement;
    let elem = parent;

    if (!isSet && !isRefSet && !hasParent) {
      return;
    }
    
    if (!elem && node.current && node.current.parentElement) {
      elem = node.current.parentElement;
      setParent(node.current.parentElement);
    }

    if (!elem) {
      return;
    }
    
    if (node && node.current) {
      node.current.remove(); 
    }

    const selectedTheme = theme || 'light';
    const themeClass = themes[selectedTheme];
    
    if (!themeClass) {
      return;
    }
    
    elem.classList.remove(...themeList);
    elem.classList.add(themeClass);
  }, [theme, node, setParent])

  console.log('[theme prodiver] start ', theme);

  return (
    <>
      <div style={providerStyle} ref={node}></div>
      {children}
    </>
  )
};

export default Provider;