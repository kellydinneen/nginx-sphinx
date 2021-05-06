const chai = require('chai');
const expect = chai.expect;

const Query = require('../src/Query');
const Parser = require('../src/Parser');
const logData = require('./dummyData.js');

describe('Query', function() {

  const query = new Query(logData);

  it('should be a function', function() {
    expect(Query).to.be.a('function');
  });

  it('should be an instance of Query', function() {
    expect(query).to.be.an.instanceof(Query);
  });

  it('should be able to find top agent on given data', function() {
    expect(query.getTopAgent(date)).to.equal(1);
  });

  it('should be able to find top request on given date', function() {
    expect(query.getTopAgent(date)).to.equal(1);
  });

});
