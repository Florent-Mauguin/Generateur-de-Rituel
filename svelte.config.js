import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter({
      pages: 'docs',   // Dossier où sera mis ton site final
      assets: 'docs',
      fallback: 'index.html' // utile si tu veux que tout redirige vers la racine (SPA)
    }),
    paths: {
      base: '/Generateur-de-Rituel' // ton nom de repo
    }
  }
};

export default config;
