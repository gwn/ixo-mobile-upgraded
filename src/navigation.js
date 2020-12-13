import { createRef } from 'react';

export const navigationRef = createRef();

export const rootNavigation =
  new Proxy({}, {
    get: (_, prop) => (...args) => navigationRef.current[prop](...args),
  });
// For info see https://reactnavigation.org/docs/navigating-without-navigation-prop
