module.exports = {
	plugins: [
		require('postcss-import'),
		require('postcss-simple-vars'),
		require('postcss-extend'),
		require('postcss-nested'),
		require('cssnano')({
			preset: 'default',
		}),

	],
};
