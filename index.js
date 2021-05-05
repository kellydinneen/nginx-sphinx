var program = require('commander');

program
  .version('0.0.1')

program
  .command('convert <source> <destination>')
  .description('parse access log into JSON and store in new file')
  .action((source, destination) => {
     console.log('converting', source);
     console.log('to', destination);
   });

program
  .command('top_agent <log> <date>')
  .description('query top agent on specified date')
  .action((log, date) => {
     console.log('finding top agent in', log);
     console.log('on', date);
   });

program
  .command('top_call <log> <date>')
  .description('query top method and path on specified date')
  .action((log, date) => {
     console.log('finding top call made in', log);
     console.log('on', date);
   });

program.parse(process.argv);
