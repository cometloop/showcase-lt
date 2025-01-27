require('dotenv').config(); // Load environment variables

const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
var cors = require('cors')

const app = express();
const PORT = 3001; 
const API_BASE_URL = process.env.API_BASE_URL;
const API_KEY = process.env.API_KEY;
const API_SECRET = process.env.API_SECRET;

app.use(cors())

app.use(
	'',
	createProxyMiddleware({
		target: API_BASE_URL,
		changeOrigin: true,
		headers: {
			[API_KEY]: [API_SECRET]
		}
	})
);

app.listen(PORT, () => {
	console.log(`Proxy server running on http://localhost:${PORT}`);
});
