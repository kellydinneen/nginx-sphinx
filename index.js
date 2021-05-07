#!/usr/bin/env node

const helpers = require('./src/command-action-helpers.js');
const sphinxImage = require('./assets/sphinx.js');
const FileManager = require('./src/FileManager');
const Query = require('./src/Query');

var program = require('commander');
program
  .version('0.0.1')
  .name('nginx-sphinx')
  .description(`${sphinxImage.sphinx}
    A CLI app to parse and query nginx access logs`)

program
  .command('parse <src> <destination>')
  .description('parse access log into JSON and store in specified file')
  .action((source, destination) => {
     const fm = new FileManager(destination, source);
     if (helpers.sourceAndDestinationPathsAreValid(fm, source, destination)) {
       const log = fm.readFile(fm.source);
       helpers.parseLog(log, fm);
       helpers.notifyUserOfSuccessfulParse(source, destination);
     }
   });

program
  .command('query <filepath> <date> ')
  .description('Query for the top agent or request on specified date. Dates should be formatted day/month/year, e.g. 10/Nov/2020.')
  .requiredOption('-p, --param <agent/request>', 'query for agent or request')
  .action((path, date, options, command) => {
    const param = options.param ? `${options.param}` : '';
    const fm = new FileManager(path);
    const log = JSON.parse(fm.readFile(fm.destination));
    const result = new Query(log).getTopProperty(param, date)
    helpers.announceQueryResult(param, date, result);
  });

program.parse(process.argv);
