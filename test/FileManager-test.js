const chai = require('chai');
const expect = chai.expect;
const fs = require('fs');

const FileManager = require('../src/FileManager');
const logData = require('./dummyData.js');

describe('File Manager', function() {

  const happyFM = new FileManager('dummySource.log', 'dummyDestination.json');
  const happySource = happyFM.source;
  const happyDestination = happyFM.destination;

  const sadFM = new FileManager('nonexistentFile.js', 'test/existingFile.json');
  const sadSource = sadFM.source;
  const sadDestination = happyFM.destination;



});
