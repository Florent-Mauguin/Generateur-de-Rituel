import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter({
      pages: 'docs',   // <--- sortie dans /docs
      assets: 'docs',
      fallback: 'index.html'
    }),
    paths: { base: '' }
  }
};