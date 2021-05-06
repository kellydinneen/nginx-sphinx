#!/usr/bin/env node

var program = require('commander');

program
  .version('0.0.1')
  .name('nginx-sphinx')
  .description('A CLI app to parse and query nginx access logs')

program
  .command('parse <source log> <destination json file>')
  .description('parse access log into JSON and store in new file')
  .action((source, destination) => {
     console.log('converting', source);
     console.log('to', destination);
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
