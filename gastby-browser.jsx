/* eslint-disable import/prefer-default-export */
import * as React from 'react';
import TopLayout from './src/gastby-theme-material-ui-top-layout/components/top-layout';

// Wraps every page in a component
exports.wrapRootElement = ({ element, props }) => {
  return <TopLayout {...props}>{element}</TopLayout>;
};
