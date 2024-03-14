import ViteCSSExportPlugin from 'vite-plugin-css-export';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit(), ViteCSSExportPlugin()],
	
	build: {
		target: 'esnext' //browsers can handle the latest ES features
	}
});
