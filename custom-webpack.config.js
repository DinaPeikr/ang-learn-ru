const CompressionPlugin = require('compression-webpack-plugin')

module.exports = (config) => {
  console.log(config);
  if (config.mode !== 'development'){
    console.log(config.mode);
     // config.plugins.push(new CompressionPlugin())
  }
  return config;
}
/*
* работает только с этими версиями:
*   "@angular-builders/custom-webpack": "8.4.1",
    "@angular-devkit/build-angular": "^0.803.24",
* */
