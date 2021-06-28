module.exports = function (config) {
    config.set({
        frameworks: ["jasmine", "karma-typescript"],
        files: [
            "src/**/*.ts"
        ], 
        client: {
            jasmine: {
            },
            clearContext: false // leave Jasmine Spec Runner output visible in browser
          },
        preprocessors: {
            "**/*.ts": "karma-typescript"
        },
        reporters: ['progress', 'kjhtml'],
        browsers: ["Chrome"]
    });
};