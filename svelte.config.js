import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	
	preprocess: [vitePreprocess()],
	
	kit: {
		adapter: adapter({
			
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),

		alias: {
			$style: "src/sass",
			$assets: "src/assets",
			$components: "src/components",
			$fonts: "src/fonts",
		},

		
        paths: {
            base: process.env.NODE_ENV === 'production' ? '/curriculo' : '',
        }
	}
};

export default config;
