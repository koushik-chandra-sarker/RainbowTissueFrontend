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
