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

module.exports = {
  parseLog,
  sourceAndDestinationPathsAreValid,
  notifyUserOfSuccessfulParse
}
