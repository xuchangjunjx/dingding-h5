module.exports = {
	publicPath: process.env.NODE_ENV === "production" ? "/dingding-h5/" : "/",
	outputDir: "docs",
	configureWebpack: {
		devServer: {
			headers: {
				"Access-Control-Allow-Origin": "*"
			}
		}
	}
};
