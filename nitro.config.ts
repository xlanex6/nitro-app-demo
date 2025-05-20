//https://nitro.unjs.io/config
export default defineNitroConfig({
  srcDir: "server",
  storage: {
    db: {
      driver: 'fs',
      base: './data/db'
    }
  },
  experimental: {
    openAPI: {
      meta: {
        title: 'My Awesome Project',
        description: 'This might become the next big thing.',
        version: '1.0'
      }
    },

  }
});
