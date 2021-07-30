const path = require('path');

const resolve = dirpath => path.resolve(__dirname, dirpath);

module.exports = {
    NODE_MODULES: resolve('../node_modules'),
    DIST: resolve('../dist'),
    SRC: resolve('../src'),
    PRIVATE: resolve('../private'),
    INDEX: resolve('../index.html'),
    BABEL_CONFIG: resolve('../babel.config.js'),
};
