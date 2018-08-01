'use strict';

const gulp = require('gulp');
const build = require('@microsoft/sp-build-web');
build.addSuppression(`Warning - [sass] The local CSS class 'ms-Grid' is not camelCase and will not be type-safe.`);

const webpack = require('webpack');
const path = require('path');
// Fix an issue with webpack and angular >= 5 (https://github.com/angular/universal-starter/issues/579)
// because the webpack config is buried in the @microsoft stack we need to tweak it here
build.configureWebpack.mergeConfig({
   additionalConfiguration: (generatedConfiguration) => {
      generatedConfiguration.plugins.push(new webpack.ContextReplacementPlugin(/\@angular(\\|\/)core(\\|\/)fesm5/, path.join(__dirname, './client')));
      generatedConfiguration.plugins = generatedConfiguration.plugins.filter((plugin) => plugin.constructor.name !== 'UglifyJsPlugin');
      return generatedConfiguration;
   }
});

build.initialize(gulp);
