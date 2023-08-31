module.exports = {
	tabWidth: 4,
	useTabs: true,
	printWidth: 120,
	semi: false,
	trailingComma: 'all',
	singleQuote: true,
	endOfLine: 'lf',
	tailwindConfig: './tailwind.config.ts',
	plugins: [import('prettier-plugin-tailwindcss')],
}
