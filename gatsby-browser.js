const React = require('react');
const Layout = require('./src/components/Layout').default;

// Wraps every page in a component
exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

//wraps the root element
exports.wrapRootElement = ({ element }) => {
  return element;
};
