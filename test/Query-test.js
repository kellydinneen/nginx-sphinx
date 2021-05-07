const chai = require('chai');
const expect = chai.expect;

const Query = require('../src/Query');
const Parser = require('../src/Parser');
const logData = require('./dummyLogData.js');

describe('Query', function() {
  console.log(logData.log);
  const happyQuery = new Query(logData.log);
  const sadQuery = new Query(logData.logWithoutTopAgentOrRequest);

  it('should be a function', function() {
    expect(Query).to.be.a('function');
  });

  it('should be an instance of Query', function() {
    expect(happyQuery).to.be.an.instanceof(Query);
  });

  it('should be able to find top agent on given date', function() {
    expect(happyQuery.getTopProperty('agent', `10/Nov/2020`)).to.deep.equal(
      {
        property: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/601.3.9 (KHTML, like Gecko) Version/9.0.2 Safari/601.3.9",
        frequency: 2
      }
    );
  });

  it('should return an error if specified date for top agent query is not included in log', function() {
    expect(happyQuery.getTopProperty('agent', `10/Nov/2022`)).to.equal('invalid date');
    expect(happyQuery.getTopProperty('agent', `20/Nov/2020`)).to.equal('invalid date');
  });

  it('should know if there is a tie between agents', function() {
    expect(sadQuery.getTopProperty('agent', `10/Nov/2020`)).to.deep.equal(
      {
        property: ["Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.3", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:15.0) Gecko/20100101 Firefox/15.0.1"],
        frequency: 2
      }
    );
  });

  it('should be able to find top request on given date', function() {
    expect(happyQuery.getTopProperty('request', `10/Nov/2020`)).to.deep.equal(
      {
        property: "GET /about",
        frequency: 2
      }
    );
  });

  it('should return an error if specified date for top request query is not included in log', function() {
    expect(happyQuery.getTopProperty('request', `10/Nov/2022`)).to.equal('invalid date');
    expect(happyQuery.getTopProperty('request', `20/Nov/2020`)).to.equal('invalid date');
  });

  it('should know if there is a tie between requests', function() {
    expect(sadQuery.getTopProperty('request', `10/Nov/2020`)).to.deep.equal(
      {
        property: ["GET /", "POST /about"],
        frequency: 2
      });
  });

});
