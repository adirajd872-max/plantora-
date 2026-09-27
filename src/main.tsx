// Prevent polyfills/libraries from throwing when attempting to assign window.fetch if getter-only
try {
  const proto = Object.getPrototypeOf(window) || window;
  const descriptor = Object.getOwnPropertyDescriptor(proto, 'fetch') || Object.getOwnPropertyDescriptor(window, 'fetch');
  if (descriptor && (!descriptor.writable || descriptor.get) && !descriptor.set) {
    let _fetch = window.fetch.bind(window);
    Object.defineProperty(window, 'fetch', {
      get() {
        return _fetch;
      },
      set(fn) {
        if (typeof fn === 'function') {
          _fetch = fn;
        }
      },
      configurable: true,
      enumerable: true,
    });
  }
} catch (e) {
  // Ignore if unable to redefine
}

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
