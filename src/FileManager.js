const fs = require('fs');
const path = require('path');

class FileManager {
  constructor(sourcePath, destinationPath) {
    this.basePath = process.cwd();
    this.source = path.join(this.basePath, sourcePath);
    this.destination = path.join(this.basePath, destinationPath);
  }

  fileExists(path) {
    return fs.existsSync(path);
  }

  readFile(path) {
    return fs.readFileSync(path, {encoding:'utf8', flag:'r'})
  }
}

module.exports = FileManager;
