module.exports = {
	entry: './main.js',
	output: {
		filename: 'bundle.js',
		path: './'
	},
	devServer: {
		inline: true,
		port: 8000
	},
	module: {
		loaders: [
			{
				test: /.\jsx?$/,
				loader: 'babel',
				exclude: /node_modules/,
				query: {
					presets: ['react', 'es2015']
				}
			}
		]
	}
};