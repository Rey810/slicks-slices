import React from 'react';
import Layout from './src/components/Layout';

// this file is checked when the browser is fired up. Wraps every component with a Layout component
export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
