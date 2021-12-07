module.exports = (api) => {
  return {
    sourceType: "unambiguous",
    presets: [
      [
        "@babel/preset-env",
        { useBuiltIns: api.env("test") ? false : "entry", corejs: "3.19" },
      ],
      "@babel/preset-react",
      "@babel/preset-typescript",
    ].filter(Boolean),
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
