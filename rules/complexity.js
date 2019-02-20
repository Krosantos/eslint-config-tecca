module.exports = {
	rules: {
		complexity: ['error', {
			max: 4,
		}],
		'max-depth': ['error', {
			max: 1,
		}],
		'max-len': ['error', {
			code: 120,
			ignoreComments: false,
			ignoreRegExpLiterals: true,
			ignoreStrings: true,
			ignoreTemplateLiterals: true,
			ignoreUrls: true,
		}],
		'max-lines': ['error', {
			max: 150,
			skipBlankLines: true,
			skipComments: true,
		}],
		'max-lines-per-function': ['error', {
			max: 40,
			skipBlankLines: true,
		}],
		'max-nested-callbacks': ['error', {
			max: 2,
		}],
		'max-params': 'error',
		'max-statements': ['error', {
			max: 7,
		}],
		'max-statements-per-line': 'error',
	},
};
