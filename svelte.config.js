import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),
  	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
			fallback: 'index.html',
			precompress: false,
			strict: true
		}),
		paths: {
      base: '' 
    },
	prerender: {
      entries: ['*'] // prérendre toutes les pages
    }
	}
};

export default config;
