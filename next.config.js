/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ["cdn.sanity.io"],
  },
  "@sanity/vision": ["node_modules/@sanity/vision"]
};
