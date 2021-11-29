module.exports = {
  reactStrictMode: true,
}
module.exports = {
  distDir: 'bbb',
}

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
};
// next.config.js
/*
module.exports = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'http://127.0.0.1:8000/rainbow-site/api:path*',
      },
    ]
  },
};*/
