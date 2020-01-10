module.exports = {
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: [
		'react-hooks',
	],
	rules: {
		'react-hooks/exhaustive-deps': 'warn',
		'react-hooks/rules-of-hooks': 'error',
	},
};
