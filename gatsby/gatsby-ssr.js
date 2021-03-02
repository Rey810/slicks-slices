import React from 'react';
import Layout from './src/components/Layout';

// this file is checked when the files are compiled and stored on the server side
export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
