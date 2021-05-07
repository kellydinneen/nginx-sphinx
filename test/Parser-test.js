const chai = require('chai');
const expect = chai.expect;
const fs = require('fs');

const Parser = require('../src/Parser');
const FileManager = require('../src/FileMAnager');
const testJSON = require('./dummyJSON.json');

describe('Parser', function() {

  const fm = new FileManager('dummySource.log', 'dummyDestination.json');
  const log = fm.readFile(fm.source);
  const parser = new Parser(log);

  it('should be a function', function() {
    expect(Parser).to.be.a('function');
  });

  it('should be an instance of Parser', function() {
    expect(parser).to.be.an.instanceof(Parser);
  });

  it('should be able to parse source content into JSON', function() {
    expect(parser.parseLog()).to.equal(JSON.stringify(testJSON));
  });

});
