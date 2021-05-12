const chalk = require('chalk');

const FileManager = require('./FileManager');
const Parser = require('./Parser');

const parseLog = (log, fileManager) => {
  const parser = new Parser(log);
  const data = parser.parseLog();
  fileManager.createDestinationFile(data);
}

const sourceAndDestinationPathsAreValid = (fileManager, source, destination) => {
  let res = true;
  if (!fileManager.fileExists(fileManager.source)) {
    console.log( chalk.redBright.bold('Sorry! ') + `The source file ${chalk.red.italic(source)} does not exist yet. Double check your file path.`)
    res = false;
  }
  if (fileManager.fileExists(fileManager.destination)) {
    console.log(chalk.redBright.bold('Whoops! ') + `Looks like the destination ${chalk.red.italic(destination)} ` + chalk.redBright('already exists!') + 'Try a different file path.')
    res = false;
  }
  return res;
}

const notifyUserOfSuccessfulParse = (source, destination) => {
  console.log(chalk.blueBright.bold('Looks good') + '👍');
  console.log(`Entries from ${source} have been` + chalk.blueBright.bold(' successfully converted to JSON ') + `and stored in ${chalk.italic(destination)}`);
}

const announceQueryResult = (param, date, result) => {
  if (date.length < 11) {
    console.log(chalk.red.bold("Oops. ") + "That date doesn't seem to be formatted correctly. Try again. Your date should be written DD/Month-Abbreviation/YYYY, e.g. 01/Nov/2020" )
  } else if (result === 'invalid date') {
    console.log(chalk.redBright.bold('Whoops! ') + `This log has no entries on ${date}. Try another date, or check to make sure your date is formatted correctly.`)
  } else if (result) {
    const plural = typeof result.property === 'object';
    console.log(`${plural ? chalk.yellowBright.bold('We have a tie! ') : ''}The top ${param}${plural ? 's' : ''} on ${chalk.yellowBright.bold(date)} ${plural ? 'are' : 'is'}:`);
    console.log(chalk.yellowBright.bold(`→ ${result.property} ←`));
    console.log(`with a frequency of ${chalk.yellowBright.bold(result.frequency)}`);
  } else {
    console.log(`Hmm, there doesn't seem to be a top ${param} on ${date}. Try another date or another log.`)
  }
}

module.exports = {
  parseLog,
  sourceAndDestinationPathsAreValid,
  notifyUserOfSuccessfulParse,
  announceQueryResult
}
