const fs = require('fs');

const sourceFileExists = (filePath) => {
  return fs.existsSync(filePath)
}

//relative file paths
// process.cwd()
