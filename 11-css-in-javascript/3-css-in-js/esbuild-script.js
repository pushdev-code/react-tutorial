const cssModulesPlugin = require('esbuild-css-modules-plugin');

require('esbuild')
	.build({
		logLevel: 'info',
		entryPoints: ['src/index.jsx'],
		bundle: true,
		outfile: 'public/bundle.js',
		plugins: [cssModulesPlugin()],
		watch: {
			onRebuild(error, result) {
				if (error) console.error('watch build failed:', error);
				else console.log('watch build succeeded:', result);
			},
		},
	})
	.catch(() => process.exit(1));
