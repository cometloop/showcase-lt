const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
var cors = require('cors')

const app = express();
const PORT = 3001; // Your proxy server port
const TARGET_SERVER = 'https://showcase.leantechniques.com'; // Target server URL

app.use(cors())

// Proxy middleware
app.use(
	'', // Proxy requests starting with `/api`
	createProxyMiddleware({
		target: TARGET_SERVER,
		changeOrigin: true, // Adjust the `Host` header to match the target
		headers: {
			lt_api_key:'lt_tech_showcase'
		}
		// pathRewrite: { '^/api': '' }, // Remove `/api` prefix if needed
	})
);

app.listen(PORT, () => {
	console.log(`Proxy server running on http://localhost:${PORT}`);
});
