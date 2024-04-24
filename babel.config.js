module.exports = (api) => {
  return {
    sourceType: "unambiguous",
    presets: [
      "@babel/env",
      ["@babel/preset-react", { runtime: "automatic" }],
      "@babel/preset-typescript",
    ],
    plugins: [
      "@babel/plugin-proposal-object-rest-spread",
      "@babel/plugin-syntax-dynamic-import",
      "@babel/plugin-proposal-class-properties",
      "@babel/plugin-transform-runtime",
      !api.env("test") && [
        "formatjs",
        {
          removeDefaultMessage: true,
        },
      ],
    ].filter(Boolean),
  };
};
