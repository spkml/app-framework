const fs = require('fs-extra');
const log = require('./helper/logger');
const path = require('./helper/path');

const file = path.project('.jestconfig.json');
const config = {
  testMatch: ['**/*.spec.js'],
  reporters: [
    'default',
    ['./node_modules/jest-html-reporter', {
      pageTitle: 'Jest Report',
      outputPath: path.project('Jest.log.html'),
      includeFailureMsg: true,
    }],
  ],
};

fs.writeJsonSync(file, config, { spaces: 2 });
log.success('Updated the Jest config file.');
