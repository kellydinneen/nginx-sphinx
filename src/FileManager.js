const fs = require('fs');
const path = require('path');

class FileManager {
  constructor(destinationPath, sourcePath = 'none') {
    this.basePath = process.cwd();
    this.destination = path.join(this.basePath, destinationPath);
    this.source = path.join(this.basePath, sourcePath);
  }

  fileExists(path) {
    return fs.existsSync(path);
  }

  readFile(path) {
    return fs.readFileSync(path, {encoding:'utf8', flag:'r'})
  }

  createDestinationFile(data) {
    fs.writeFile(this.destination, data, function (err) {
      if (err) return console.log(err);
    });
  }
}

module.exports = FileManager;
