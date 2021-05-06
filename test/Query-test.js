const chai = require('chai');
const expect = chai.expect;

const Query = require('../src/Query');
const Parser = require('../src/Parser');
const logData = require('./dummy.log');

console.log(logData);

describe('Log', function() {

  const log = new Log(logData);

  it('should be a function', function() {
    expect(Log).to.be.a('function');
  });

  it('should be an instance of Log', function() {
    expect(log).to.be.an.instanceof(Log);
  });

  it('should be able to parse source content into JSON', function() {
  });

  it('should store parsed log in destination file', function() {
  });

});
