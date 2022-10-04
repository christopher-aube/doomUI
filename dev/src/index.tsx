import React from 'react';
import { createRoot } from 'react-dom/client';
import './_index.scss';
import { App } from './app';

const container = document.getElementById('dui__app') as HTMLElement;
const root = createRoot(container);

root.render(<App />);