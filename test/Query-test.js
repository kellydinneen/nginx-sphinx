const chai = require('chai');
const expect = chai.expect;

const Query = require('../src/Query');
const Parser = require('../src/Parser');
const logData = require('./dummyData.js');

describe.only('Query', function() {

  const happyQuery = new Query(logData.log);
  const sadQuery = new Query(logData.log);

  it('should be a function', function() {
    expect(Query).to.be.a('function');
  });

  it('should be an instance of Query', function() {
    expect(happyQuery).to.be.an.instanceof(Query);
  });

  it('should be able to find top agent on given date', function() {
    expect(happyQuery.getTopAgent(`10/Nov/2020`)).to.deep.equal([
      {
        agent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/601.3.9 (KHTML, like Gecko) Version/9.0.2 Safari/601.3.9",
        hits: 2
      }
    ]);
  });

  it('should return an error if specified date for top agent query is not included in log', function() {
    expect(happyQuery.getTopAgent(`10/Nov/2022`)).to.equal('invalid date');
    expect(happyQuery.getTopAgent(`20/Nov/2020`)).to.equal('invalid date');
  });

  it('should know if there is a tie between agents', function() {
    expect(sadQuery.getTopAgent(`10/Nov/2022`)).to.deep.equal([
      {
        agent: "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.3",
        hits: 2
      },
      {
        agent: "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:15.0) Gecko/20100101 Firefox/15.0.1",
        hits: 2
      }
    ]);
  });

});
