/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
const withSass = require("@zeit/next-sass");
const withPurgeCss = require("next-purgecss");

module.exportts = withSass(withPurgeCss());
module.exports = nextConfig;
