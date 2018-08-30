module.exports = function (api) {
  api.cache(true);
  const presets = ["react-native"];
  const plugins = [];

  return {
    presets,
    plugins
  };
}