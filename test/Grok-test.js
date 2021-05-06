const chai = require('chai');
const expect = chai.expect;

const Grok = require('../src/Grok');

describe.only('Grok', function() {

  const pattern = '%{IP:client} \\[%{INT:day}/%{MONTH:month}/%{INT:year}:%{TIME:time} -0700\\] "%{WORD:method} %{URIPATHPARAM:url} HTTP/1.1" %{INT:status} %{INT:someNumber} "%{DATA:mtag}" "%{DATA:agent}"';
  const grok = new Grok(pattern);

  it('should be a function', function() {
    expect(Grok).to.be.a('function');
  });

  it('should be an instance of Grok', function() {
    expect(grok).to.be.an.instanceof(Grok);
  });

  it('should be able to parse single line of log', function() {
    const string = `10.0.1.7 [10/Nov/2020:23:58:02 -0700] "GET /about HTTP/1.1" 200 890 "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/601.3.9 (KHTML, like Gecko) Version/9.0.2 Safari/601.3.9"`;
    const expectedOutput = {
      client: '10.0.1.7',
      day: '10',
      month: 'Nov',
      year: '2020',
      time: '23:58:02',
      method: 'GET',
      url: '/about',
      status: '200',
      someNumber: '890',
      mtag: '-',
      agent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/601.3.9 (KHTML, like Gecko) Version/9.0.2 Safari/601.3.9'
    }
    expect(grok.grokString(string)).to.deep.equal(expectedOutput);
  });

});
