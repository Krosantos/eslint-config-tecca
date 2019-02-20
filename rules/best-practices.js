module.exports = {
	rules: {
		'no-eq-null': 'error',
		'no-implicit-coercion': ['error', {
			boolean: false,
			number: true,
			string: true,
		}],

		'no-magic-numbers': ['off', {
			detectObjects: false,
			enforceConst: true,
			ignore: [],
			ignoreArrayIndexes: true,
		}],
	},
};
