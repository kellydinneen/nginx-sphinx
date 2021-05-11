const chai = require('chai');
const expect = chai.expect;

const Grok = require('../src/Grok');

describe('Grok', function() {

  const pattern = '%{IP:ipAddress} - - \\[%{HTTPDATE:requestTimestamp}\\] "%{WORD:requestMethod} %{URIPATHPARAM:requestPath} HTTP/1.1" %{INT:requestStatus} %{INT:bytes} "%{DATA:mtag}" "%{DATA:agent}"';
  const grok = new Grok(pattern);

  it('should be a function', function() {
    expect(Grok).to.be.a('function');
  });

  it('should be an instance of Grok', function() {
    expect(grok).to.be.an.instanceof(Grok);
  });

  it('should be able to parse single line of log', function() {
    const string = '10.0.1.6 - - [10/Nov/2020:22:05:55 -0700] "GET / HTTP/1.1" 200 1770 "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/601.3.9 (KHTML, like Gecko) Version/9.0.2 Safari/601.3.9"';

    const expectedOutput = {
      ipAddress: '10.0.1.6',
      requestTimestamp: '10/Nov/2020:22:05:55 -0700',
      requestMethod: 'GET',
      requestPath: '/',
      requestStatus: '200',
      agent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/601.3.9 (KHTML, like Gecko) Version/9.0.2 Safari/601.3.9"
    }

    expect(grok.grokString(string)).to.deep.equal(expectedOutput);
  });

});
