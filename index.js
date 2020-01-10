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
		'./rules/errors',
		'./rules/imports',
		'./rules/node',
		'./rules/react-a11y',
		'./rules/react-hooks',
		'./rules/react-perf',
		'./rules/react',
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
	plugins: ['babel', 'react-perf', 'react-hooks', 'grapes'],
};
