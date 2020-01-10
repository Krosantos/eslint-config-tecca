/* eslint-disable max-lines */
module.exports = {
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: [
		'react',
	],
	rules: {
		'class-methods-use-this': ['error', {
			exceptMethods: [
				'render',
				'getInitialState',
				'getDefaultProps',
				'getChildContext',
				'componentWillMount',
				'UNSAFE_componentWillMount',
				'componentDidMount',
				'componentWillReceiveProps',
				'UNSAFE_componentWillReceiveProps',
				'shouldComponentUpdate',
				'componentWillUpdate',
				'UNSAFE_componentWillUpdate',
				'componentDidUpdate',
				'componentWillUnmount',
				'componentDidCatch',
				'getSnapshotBeforeUpdate',
			],
		}],
		'jsx-quotes': ['error', 'prefer-double'],
		'no-underscore-dangle': ['error', {
			allow: ['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'],
			allowAfterSuper: false,
			allowAfterThis: false,
			enforceInMethodNames: true,
		}],
		'react/boolean-prop-naming': 'error',
		'react/button-has-type': ['error', {
			button: true,
			reset: false,
			submit: true,
		}],
		'react/default-props-match-prop-types': ['error', { allowRequiredDefaults: false }],
		'react/destructuring-assignment': ['error', 'always'],
		'react/display-name': ['off', { ignoreTranspilerName: false }],
		'react/forbid-component-props': ['off', { forbid: [] }],
		'react/forbid-dom-props': ['off', { forbid: [] }],
		'react/forbid-elements': ['off', { forbid: [] }],
		'react/forbid-foreign-prop-types': ['warn', { allowInPropTypes: true }],
		'react/forbid-prop-types': ['error', {
			checkChildContextTypes: true,
			checkContextTypes: true,
			forbid: ['any', 'array', 'object'],
		}],
		'react/jsx-boolean-value': ['error', 'never', { always: [] }],
		'react/jsx-child-element-spacing': 'off',
		'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
		'react/jsx-closing-tag-location': 'error',
		'react/jsx-curly-brace-presence': ['error', { children: 'never', props: 'never' }],
		'react/jsx-curly-newline': ['error', {
			multiline: 'consistent',
			singleline: 'consistent',
		}],
		'react/jsx-curly-spacing': ['error', 'never', { allowMultiline: true }],
		'react/jsx-equals-spacing': ['error', 'never'],
		'react/jsx-filename-extension': 'off',
		'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
		'react/jsx-fragments': ['error', 'syntax'],
		'react/jsx-handler-names': 'error',
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-indent-props': ['error', 'tab'],
		'react/jsx-key': 'error',
		'react/jsx-max-depth': ['error', {
			max: 2,
		}],
		'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],
		'react/jsx-no-bind': ['error', {
			allowArrowFunctions: false,
		}],
		'react/jsx-no-comment-textnodes': 'error',
		'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],
		'react/jsx-no-literals': 'error',
		'react/jsx-no-target-blank': ['error', { enforceDynamicLinks: 'always' }],
		'react/jsx-no-undef': 'error',
		'react/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],
		'react/jsx-pascal-case': ['error', {
			allowAllCaps: true,
			ignore: [],
		}],
		'react/jsx-props-no-multi-spaces': 'error',
		'react/jsx-props-no-spreading': ['error', {
			custom: 'enforce',
			exceptions: [],
			html: 'enforce',
		}],
		'react/jsx-sort-default-props': 'error',
		'react/jsx-sort-prop-types': 'off',
		'react/jsx-sort-props': 'error',
		'react/jsx-space-before-closing': ['off', 'always'],
		'react/jsx-tag-spacing': ['error', {
			afterOpening: 'never',
			beforeClosing: 'never',
			beforeSelfClosing: 'always',
			closingSlash: 'never',
		}],
		'react/jsx-uses-react': ['error'],
		'react/jsx-uses-vars': 'error',
		'react/jsx-wrap-multilines': ['error', {
			arrow: 'parens-new-line',
			assignment: 'parens-new-line',
			condition: 'parens-new-line',
			declaration: 'parens-new-line',
			logical: 'parens-new-line',
			prop: 'parens-new-line',
			return: 'parens-new-line',
		}],
		'react/no-access-state-in-setstate': 'error',
		'react/no-array-index-key': 'error',
		'react/no-children-prop': 'error',
		'react/no-danger': 'warn',
		'react/no-danger-with-children': 'error',
		'react/no-deprecated': ['error'],
		'react/no-did-mount-set-state': 'off',
		'react/no-did-update-set-state': 'error',
		'react/no-direct-mutation-state': 'off',
		'react/no-find-dom-node': 'error',
		'react/no-is-mounted': 'error',
		'react/no-multi-comp': 'off',
		'react/no-redundant-should-component-update': 'error',
		'react/no-render-return-value': 'error',
		'react/no-set-state': 'off',
		'react/no-string-refs': 'error',
		'react/no-this-in-sfc': 'error',
		'react/no-typos': 'error',
		'react/no-unescaped-entities': 'error',
		'react/no-unknown-property': 'error',
		'react/no-unsafe': 'error',
		'react/no-unused-prop-types': ['error', {
			customValidators: [
			],
			skipShapeProps: true,
		}],
		'react/no-unused-state': 'error',
		'react/no-will-update-set-state': 'error',
		'react/prefer-es6-class': ['error', 'always'],
		'react/prefer-read-only-props': 'off',
		'react/prefer-stateless-function': ['error', { ignorePureComponents: true }],
		'react/prop-types': 'off',
		'react/react-in-jsx-scope': 'error',
		'react/require-default-props': ['error', {
			forbidDefaultForRequired: true,
		}],
		'react/require-optimization': ['off', { allowDecorators: [] }],
		'react/require-render-return': 'error',
		'react/self-closing-comp': 'error',
		'react/sort-comp': ['error', {
			groups: {
				lifecycle: [
					'displayName',
					'propTypes',
					'contextTypes',
					'childContextTypes',
					'mixins',
					'statics',
					'defaultProps',
					'constructor',
					'getDefaultProps',
					'getInitialState',
					'state',
					'getChildContext',
					'getDerivedStateFromProps',
					'componentWillMount',
					'UNSAFE_componentWillMount',
					'componentDidMount',
					'componentWillReceiveProps',
					'UNSAFE_componentWillReceiveProps',
					'shouldComponentUpdate',
					'componentWillUpdate',
					'UNSAFE_componentWillUpdate',
					'getSnapshotBeforeUpdate',
					'componentDidUpdate',
					'componentDidCatch',
					'componentWillUnmount',
					'componentDidCatch',
				],
				rendering: [
					'/^render.+$/',
					'render',
				],
			},
			order: [
				'static-methods',
				'instance-variables',
				'lifecycle',
				'/^on.+$/',
				'getters',
				'setters',
				'/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
				'instance-methods',
				'everything-else',
				'rendering',
			],
		}],
		'react/sort-prop-types': 'error',
		'react/state-in-constructor': ['error', 'always'],
		'react/static-property-placement': ['error', 'property assignment'],
		'react/style-prop-object': 'error',
		'react/void-dom-elements-no-children': 'error',
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.json'],
			},
		},
		propWrapperFunctions: [
			'forbidExtraProps',
			'exact',
			'Object.freeze',
		],
		react: {
			pragma: 'React',
			version: 'detect',
		},
	},
};
