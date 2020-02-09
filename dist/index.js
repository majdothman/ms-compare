const Pageres = require('pageres');
const config = require('../config');
const YAML = require('yaml');
const fs = require('fs');
const path = require("path");

/**
 * MsCompare package
 */
class MsCompare extends Pageres {

    constructor() {
        super();

    }

    init() {
        console.log('------------ Start it ------------ ');
        config.yaml.map(yamlInfo => {
            var counter = 1;
            var counterOf = config.yaml.length;
            // get yaml file from config.yaml.path
            let file = YAML.parse(fs.readFileSync(yamlInfo.path, 'utf8'));
            let fileBaseName = path.basename(yamlInfo.path, '.yaml');
            console.log('------ ' + fileBaseName + ' have ' + counterOf + ' screenshots')
            // get PageList from file: yaml file
            file.PagesList.map(page => {
                // Make screenshot for every page in yaml file
                this.getWebShot(
                    page,
                    yamlInfo.size,
                    {
                        folder: fileBaseName
                    }
                );
                console.log(fileBaseName + ': ' + counter++ + ' screenshot of ' + counterOf)
            });
        });

        console.log('------------ Finish ------------ ');
    }

    /**
     * get screenshot of url
     * @param url
     * @param size
     * @param option
     * @returns {MsCompare}
     */
    getWebShot(url, size, option) {

        if (typeof option === "undefined" || typeof option.folder === "undefined") {
            throw new Error('option.folder');
        }
        (async () => {
            await new Pageres({delay: 2})
                .src(
                    url,
                    [size],
                    option
                )
                .dest(config.saveResult + size + '/' + option.folder + '/')
                .run();
        })();
        return this;
    }
}

exports.default = MsCompare;
module.exports = MsCompare;
module.exports.default = MsCompare;