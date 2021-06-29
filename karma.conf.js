module.exports = function (config) {
    config.set({
        frameworks: ["jasmine", "karma-typescript"],
        files: [
            "src/**/*.ts"
        ],
        client: {
            clearContext: false // leave Jasmine Spec Runner output visible in browser
        },
        preprocessors: {
            "**/*.ts": ['karma-typescript']
        },

        karmaTypescriptConfig: {
            compilerOptions: {
                allowJs: true,
            },
            
            bundlerOptions: {
                transforms: [
                    require("karma-typescript-es6-transform")({ // uses babel to compile the es6 modules to es5 syntax
                        presets: [
                            ["@babel/env", { // setting this presets ensures that all runtime objects are included
                             targets: {
                              browsers: ["last 2 Chrome versions"]
                             }
                            }]
                           ]
                          }
                    )
                ]
            }
        },
        reporters: ['progress', 'kjhtml'],
        browsers: ["Chrome"]
    });
};