/* Copyright 2015, Yahoo Inc.
   Copyrights licensed under the MIT License.
   See the accompanying LICENSE file for terms. */

// Karma configuration
// Generated on Wed Sep 28 2016 23:32:44 GMT-0700 (PDT)

var requireNodeModules = [
    'react',
    'react-dom',
    'react-addons-test-utils',
    'chai',
];

module.exports = function(config) {
    config.set({
        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // plugins whitelisted here to enforce correct ordering
        plugins: [
            // javascript builders and loaders first
            'karma-mendel',
            // shims and polyfills that PhantomJS or browsers might need
            'karma-es6-shim',
            // preprocessors
            // 'karma-babel-preprocessor',
            // everything else
            'karma-jasmine',
            'karma-chrome-launcher',
            'karma-phantomjs-launcher',
            'karma-jasmine-diff-reporter',
            'karma-spec-reporter',
            'karma-coverage-istanbul-reporter',
        ],

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mendel', 'jasmine', 'es6-shim'],

        // list of files / patterns to load in the browser
        files: ['isomorphic/**/_test_/*.js'],

        // list of files to exclude
        exclude: ['isomorphic/base/main.js'],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'isomorphic/**/*.js': ['mendel'],
        },

        mendel: {
            environment: 'test',
        },

        // any of these options are valid: https://github.com/istanbuljs/istanbuljs/blob/aae256fb8b9a3d19414dcf069c592e88712c32c6/packages/istanbul-api/lib/config.js#L33-L39
        coverageIstanbulReporter: {
            // reports can be any that are listed here: https://github.com/istanbuljs/istanbuljs/tree/aae256fb8b9a3d19414dcf069c592e88712c32c6/packages/istanbul-reports/lib
            reports: ['html', 'lcovonly', 'text-summary'],
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['jasmine-diff', 'spec', 'coverage-istanbul'],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_DEBUG,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity,
    });
};
