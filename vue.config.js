function proxy(alias, url, ws) {
	let key = `^/${alias}`;
	return {
		[key]: {
			target: url,
			changeOrigin: true,
			ws,
			pathRewrite: {
				[key]: ""
			}
		}
	};
}
module.exports = {
	publicPath: process.env.NODE_ENV === "production" ? "/dingding-h5/" : "/",
	outputDir: "docs",
	configureWebpack: {
		devServer: {
			headers: {
				"Access-Control-Allow-Origin": "*"
			},
			proxy: {
				...proxy("dingapi", `https://oapi.dingtalk.com`),
				...proxy("dingding", `http://localhost:9999/dingding`)
			}
		}
	}
};
