import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const config = {
  preprocess: preprocess(),

  kit: {
    adapter: adapter({
      pages: 'docs',      // sortie du site dans /docs
      assets: 'docs',
      fallback: 'index.html'
    }),
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/Generateur-de-Rituel' : ''
    }
  }
};

export default config;