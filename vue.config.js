module.exports = {
	outputDir: "doc",
	configureWebpack: {
		devServer: {
			headers: {
				"Access-Control-Allow-Origin": "*"
			}
		}
	}
};
