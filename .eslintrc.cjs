module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'xo',
	],
	overrides: [
		{
			extends: [
				'xo-typescript',
				'xo-typescript/space',
			],
			files: [
				'*.ts',
				'*.tsx',
			],
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: ['./tsconfig.json', './tsconfig.node.json'],
		tsconfigRootDir: __dirname,
	},
	plugins: [
		'react',
	],
	rules: {
		'react/react-in-jsx-scope': 'off',
		'react/jsx-uses-react': 'off',
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};
