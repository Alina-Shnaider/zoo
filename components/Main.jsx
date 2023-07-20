const Layout = require('./Layout');
const React = require('react');

module.exports = function Main({ title }) {
  return (
    <Layout title={title}>
      <div className="main">
        <img src="https://www.mosigra.ru/image/cache/data/mosigra.product.main/549/305/DSC_3983-1024x1024-wm.webp" />
      </div>
    </Layout>
  );
};
