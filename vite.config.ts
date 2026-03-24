import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

import { nodePolyfills } from 'vite-plugin-node-polyfills';
import dynamicImport from 'vite-plugin-dynamic-import';

import {inlineSvg} from '@svelte-put/preprocess-inline-svg/vite';

export default defineConfig({
	plugins: [
		nodePolyfills({include:['url'],protocolImports:false}),
		inlineSvg([
			{
			  directories:['./src/assets','./static'],
			  attributes: {
				role: 'img',
			  }
			}
		  ],{
			inlineSrcAttributeName: 'inline-src',
		  }),
		sveltekit(),
		dynamicImport(),
	],
	define:{
		__DATA: JSON.stringify(path.resolve(__dirname,'.data')),
		__BASE_DIR: JSON.stringify(__dirname),
	},
});
