module.exports = {
	rules: {
		'arrow-parens': ['error', 'always'],
		curly: ['error', 'multi-or-nest', 'consistent'],
		indent: ['error', 'tab'],
		'multiline-ternary': 'error',
		'newline-after-var': 'error',
		'no-inline-comments': 'error',
		'no-multiple-empty-lines': ['error', {
			max: 1,
		}],
		'no-negated-condition': 'error',
		'no-tabs': 'off',
		'nonblock-statement-body-position': ['error', 'below'],
		'prefer-object-spread': 'error',
		'quote-props': ['error', 'as-needed', { numbers: true }],
	},
};
