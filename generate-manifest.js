/* eslint-disable */
const fs = require('fs');
const path = require('path');
const packageJson = require('./package.json');

const TEMPLATE_FILENAME = 'manifest.template.json';
const FILE_NAME = 'manifest.json';
const OUTPUT_DIR = 'dist';
const SOURCE_DIR = 'app';

const env = process.argv[2] || 'production';
const manifest = JSON.parse(fs.readFileSync(path.join(SOURCE_DIR, TEMPLATE_FILENAME)).toString());

/*
  Transformations
 */
if (env === 'development') {
  manifest.version = `${packageJson.version}-debug`;
  // Change name for debug
  manifest.name = `${manifest.name} (debug)`;
  // Delete section with GUID to make sure it will not replace production version of extension
  delete manifest.applications;
} else {
  manifest.version = packageJson.version;
}

if (!fs.existsSync(OUTPUT_DIR)){
  fs.mkdirSync(OUTPUT_DIR);
}
fs.writeFileSync(path.join(OUTPUT_DIR, FILE_NAME), JSON.stringify(manifest));

