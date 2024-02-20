/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath:
    process.env.NODE_ENV === "production"
      ? "/richardtorres314.github.io"
      : undefined
};

module.exports = nextConfig;
