import { RunWdio} from '@orxe-test-automation/e2e';
const path = require('path');
//import Launcher from '@wdio/cli';

const wdioConfig = require('../config/wdio.conf').config;

const baseSpecsPath = path.join(process.cwd().split('\\client\\')[0],'/**/@orxe-test-automation/hotel-search/**/microapp/*.spec.js');
wdioConfig.specs = ['./tests/functional/specs/microapp/*.spec.ts', baseSpecsPath];


RunWdio(wdioConfig);

