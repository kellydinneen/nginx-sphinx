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
    console.log(`Sorry! The source file ${source} does not exist yet. Double check your file path.`)
    res = false;
  }
  if (fileManager.fileExists(fileManager.destination)) {
    console.log(`Looks like the destination ${destination} already exists! Try a different file path.`)
    res = false;
  }
  return res;
}

const notifyUserOfSuccessfulParse = (source, destination) => {
  console.log(`Looks good 👍`);
  console.log(`Entries from ${source} have been successfully converted to JSON and stored in ${destination}`);
}

const announceQueryResult = (param, date, result) => {
  if (result) {
    const plural = typeof result.property === 'object';
    console.log(`${plural ? 'We have a tie! ' : ''}The top ${param}${plural ? 's' : ''} on ${date} ${plural ? 'are' : 'is'}:`);
    console.log(`→ ${result.property} ←`);
    console.log(`with a frequency of ${result.frequency}`);
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
