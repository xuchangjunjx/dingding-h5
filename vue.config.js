module.exports = {
	outputDir: "docs",
	configureWebpack: {
		devServer: {
			headers: {
				"Access-Control-Allow-Origin": "*"
			}
		}
	}
};
