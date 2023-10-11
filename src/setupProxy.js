// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/wp-json',
    createProxyMiddleware({
      target: 'https://greet.bg',
      changeOrigin: true,
    })
  );
};
