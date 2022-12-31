/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://citationhero.io",
  generateRobotsTxt: true, // (optional)
  exclude: ["/extension-window", "/kahoot/*"],
  // ...other options
};
