module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(js|jsx|ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [require.resolve('babel-preset-react-app')],
    },
  });

  config.resolve.extensions.push('.js', '.jsx', '.ts', '.tsx');
  return config;
};
