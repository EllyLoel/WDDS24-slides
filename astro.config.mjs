import { defineConfig } from 'astro/config';
import {
	transformerNotationDiff,
	transformerNotationHighlight,
	transformerNotationWordHighlight,
} from '@shikijs/transformers';

export default defineConfig({
	server: {
		port: 1312,
	},
	prefetch: {
		prefetchAll: true,
		defaultStrategy: 'viewport',
	},
	experimental: {
		clientPrerender: true,
	},
	markdown: {
		shikiConfig: {
			themes: {
				light: 'github-light',
				dark: 'github-dark-high-contrast',
			},
			wrap: true,
			transformers: [
				transformerNotationDiff(),
				transformerNotationHighlight(),
				transformerNotationWordHighlight(),
			],
		},
	},
});
