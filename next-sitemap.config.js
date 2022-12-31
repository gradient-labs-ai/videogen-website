/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://videogen.io",
  generateRobotsTxt: true, // (optional)
  exclude: [],
  // ...other options
};
