#!/usr/bin/env node

const helpers = require('./src/command-action-helpers.js');
const FileManager = require('./src/FileManager');

var program = require('commander');

program
  .version('0.0.1')
  .name('nginx-sphinx')
  .description('A CLI app to parse and query nginx access logs')

program
  .command('parse <src> <destination>')
  .description('parse access log into JSON and store in specified file')
  .action((source, destination) => {
     const fm = new FileManager(source, destination);
     if (helpers.sourceAndDestinationPathsAreValid(fm, source, destination)) {
       const log = fm.readFile(fm.source);
       helpers.parseLog(log, fm);
       helpers.notifyUserOfSuccessfulParse(source, destination);
     }
   });

program
  .command('query <log> <date>')
  .description('query top agent or request on specified date')
  .requiredOption('-p, --param <agent or request>', 'query for top agent or top request')
  .action((log, date, options, command) => {
    if (options.debug) {
      console.error('Called %s with options %o', command.log(), options);
    }
    const param = options.param ? `${options.param} ` : '';
    console.log(`Searching for top ${param} in ${log} on ${date}`);
  });

program.parse(process.argv);
