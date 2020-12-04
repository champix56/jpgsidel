module.exports = function(config) {
    config.set({
      frameworks: ['mocha', 'chai'],
    plugins: [
      require('karma-mocha'),
      require('karma-chai'),
      require('karma-chrome-launcher'),
      require('mocha-simple-html-reporter')
    ],
      files: ['test/**/*.js'],
      port: 9876,  // karma web server port
      colors: true,
      reporters:['mocha-simple-html-reporter'],
      exports:['Produits','Produit','requirejs'],
      logLevel: config.LOG_INFO,
      browsers: ['Chrome'],
      autoWatch: false,
      // singleRun: false, // Karma captures browsers, runs the tests and exits
      concurrency: Infinity,
      
    })
  }