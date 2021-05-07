const chai = require('chai');
const expect = chai.expect;
const fs = require('fs');

const FileManager = require('../src/FileManager');
const logData = require('./dummyJSON.json');

describe.only('File Manager', function() {

  const happyFM = new FileManager('dummySource.log', 'dummyDestination.json');
  const happySource = happyFM.source;
  const happyDestination = happyFM.destination;

  const sadFM = new FileManager('nonexistentFile.js', 'existingFile.json');
  const sadSource = sadFM.source;
  const sadDestination = sadFM.destination;

  it('should be a function', function() {
    expect(FileManager).to.be.a('function');
  });

  it('should be an instance of FileManager', function() {
    expect(happyFM).to.be.an.instanceof(FileManager);
    expect(sadFM).to.be.an.instanceof(FileManager);
  });

  it('should know if a file does not exist', function() {
    expect(sadFM.fileExists(sadSource)).to.equal(false);

    expect(happyFM.fileExists(happyDestination)).to.equal(false);
  });

  it('should know if a file does exist', function() {
    expect(happyFM.fileExists(happySource)).to.equal(true);
    expect(sadFM.fileExists(sadDestination)).to.equal(true);
  });

  it('should be able to read a source file', function() {
    expect(happyFM.readFile(happySource)).to.have.string('Mozilla/5.0');
  });

  it('should be able to create a new file', async function() {
    expect(happyFM.fileExists(happyDestination)).to.equal(false);

    await happyFM.createDestinationFile(JSON.stringify(logData));

    expect(happyFM.fileExists(happyDestination)).to.equal(true);
  });

  it('should be able to read JSON log and log should be accurately parsed', function() {
    const log = happyFM.readFile(happyDestination);
    expect(JSON.parse(log)).to.deep.equal(logData);

    try {
      fs.unlinkSync(happyDestination)
    } catch(err) {
      console.error(err)
    }
  });

});
