import { SitemapStream, streamToPromise } from "sitemap";

export default async (req, res) => {
  try {
    const smStream = new SitemapStream({
      hostname: `https://pgsfm.uk`,
      cacheTime: 600000,
    });

    // List of posts
    const pages = [
      { path: "/", changefreq: "daily", priority: 1 },
      { path: "/about", changefreq: "daily", priority: 0.9 },
      { path: "/about-us", changefreq: "daily", priority: 0.5 },
      { path: "/services", changefreq: "daily", priority: 0.9 },
      { path: "/cleaning", changefreq: "daily", priority: 0.9 },
      { path: "/contact", changefreq: "daily", priority: 0.9 },
    ];

    // Create each URL row
    pages.forEach((page) => {
      smStream.write({
        url: page.path,
        changefreq: page.changefreq,
        priority: page.priority,
      });
    });

    // End sitemap stream
    smStream.end();

    // XML sitemap string
    const sitemapOutput = (await streamToPromise(smStream)).toString();

    // Change headers
    res.writeHead(200, {
      "Content-Type": "application/xml",
    });

    // Display output to user
    res.end(sitemapOutput);
  } catch (e) {
    console.log(e);
    res.send(JSON.stringify(e));
  }
};
