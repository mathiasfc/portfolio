/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  env: {
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    EMAIL_SENDER: process.env.EMAIL_SENDER,
    EMAIL_RECEIVER: process.env.EMAIL_RECEIVER,
  },
};

module.exports = nextConfig;
