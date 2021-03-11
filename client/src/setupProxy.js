// const { proxy } = require('http-proxy-middleware');

// // src/setupProxy.js
// module.exports = function(app) {
//     app.use("/api",proxy({
//             target: "http://localhost:5000", // 비즈니스 서버 URL 설정
//             changeOrigin: true
//         })
//     );
// };

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use("/api/hello", createProxyMiddleware({ target: "http://localhost:5000", changeOrigin: true}));
};