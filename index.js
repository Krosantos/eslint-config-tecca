module.exports = {
	env: {
		browser: true,
		es6: true,
		jest: true,
		node: true,
	},
	extends: [
		'eslint-config-airbnb',
		'./rules/babel',
		'./rules/best-practices',
		'./rules/complexity',
		'./rules/imports',
		'./rules/react',
		'./rules/react-perf',
		'./rules/style',
		'./rules/variables',
	].map(require.resolve),
	parser: 'babel-eslint',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 6,
		sourceType: 'module',
	},
	plugins: ['babel', 'react-perf'],
};
