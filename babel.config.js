module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage",
        corejs: 3,
        targets: {
          ie: 11,
          chrome: 90,
        },
      },
    ],
  ],
};