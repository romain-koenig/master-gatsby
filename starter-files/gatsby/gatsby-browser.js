import React from 'react';
import Layout from './src/components/Layout';

export function wrapPageElement({ element, props }) {
  // console.log(`This is Gatsby Browser wrappin element ${element}`);
  console.log(element);
  return <Layout {...props}>{element}</Layout>;
}
