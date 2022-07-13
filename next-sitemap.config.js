const config = {
  siteUrl: process.env.SITE_URL || "https://pgssecurityfm.co.uk",
  generateRobotsTxt: true, // (optional)
  changefreq: "daily",
  sourceDir: "/",
  priority: 0.7,
  sitemapSize: 5000,
  //   exclude: ["/protected-page", "/awesome/secret-page"],
  alternateRefs: [
    {
      href: "https://es.example.com",
      hreflang: "es",
    },
    {
      href: "https://fr.example.com",
      hreflang: "fr",
    },
  ],
  // Default transformation function
  transform: async (config, path) => {
    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },

  // ...other options
};
