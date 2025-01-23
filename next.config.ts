import type { NextConfig } from "next";

module.exports = {
    env: {
        MY_EMAIL: process.env.MY_EMAIL,
        MY_PASSWORD: process.env.MY_PASSWORD,
    },
};

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
