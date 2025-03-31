import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/frontend-CSC3213" : "",
  assetPrefix: isProd ? "/frontend-CSC3213/" : "",
};

export default nextConfig;