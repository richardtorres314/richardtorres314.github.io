// @ts-check

import NextBundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = NextBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

/**
 * @type {import('next').NextConfig}
 * */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath:
    process.env.NODE_ENV === "production"
      ? "/richardtorres314.github.io"
      : undefined,
};

export default withBundleAnalyzer(nextConfig);
