module.exports = {
	rules: {
		'react/boolean-prop-naming': 'error',
		'react/jsx-filename-extension': 'off',
		'react/jsx-handler-names': 'error',
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-indent-props': ['error', 'tab'],
		'react/jsx-key': 'error',
		'react/jsx-max-depth': ['error', {
			max: 2,
		}],
		'react/jsx-no-bind': ['error', {
			allowArrowFunctions: false,
		}],
		'react/jsx-no-literals': 'error',
		'react/jsx-sort-default-props': 'error',
		'react/jsx-sort-props': 'error',
		'react/no-unsafe': 'error',
		'react/prop-types': 'off',
		'react/sort-prop-types': 'error',
	},
};
