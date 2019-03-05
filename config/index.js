var fs = require('fs');
var _ = require('lodash');

export function bootEnvConfig() {
    var path = 'config/environment.js';
    let baseConfig = {};
    const env = process.env.NODE_ENV || 'dev';
    try {
        baseConfig = require(`${process.cwd()}/${path}`);
    } catch (err) {
        console.log(err)
    }

    let envConfig = {};
    if (env && env !== '') {
        // environment.{env}.json
        const pathParts = path.split('/');
        const fileParts = pathParts[pathParts.length - 1].split('.');

        fileParts.splice(fileParts.length - 1, 0, env);
        pathParts[pathParts.length - 1] = fileParts.join('.');
        path = pathParts.join('/');
        try {
            envConfig = require(`${process.cwd()}/${path}`);
        } catch (err) {
        }
    }
    var config = _.merge(baseConfig, envConfig)
    return config;
}