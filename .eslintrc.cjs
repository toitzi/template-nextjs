module.exports = {
	env: { browser: true, es2020: true, node: true, 'cypress/globals': true },
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:cypress/recommended', 'prettier'],
	plugins: ['@typescript-eslint', 'cypress'],
	parser: '@typescript-eslint/parser',
	parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
	rules: {
		'no-console': 1,
		quotes: [2, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
	},
}
