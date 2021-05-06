const chai = require('chai');
const expect = chai.expect;

const Parser = require('../src/Parser');
const logData = require('./dummyData.js');

describe('Log', function() {

  const parser = new Parser(log);

  it('should be a function', function() {
    expect(Parser).to.be.a('function');
  });

  it('should be an instance of Log', function() {
    expect(parser).to.be.an.instanceof(Parser);
  });

  it('should be able to parse source content into JSON', function() {
    expect(parser.convertLog()).to.deep.equal(logData);
  });

});
