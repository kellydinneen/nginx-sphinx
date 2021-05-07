const Grok = require('./Grok');
const grok = require('grok-js');

class Parser {
  constructor(sourceLog) {
    this.sourceData = sourceLog;
    this.pattern = '%{IP:client} - - \\[%{INT:day}/%{MONTH:month}/%{INT:year}:%{TIME:time} -0700\\] "%{WORD:method} %{URIPATHPARAM:url} HTTP/1.1" %{INT:status} %{INT:someNumber} "%{DATA:mtag}" "%{DATA:agent}"';
  }

  parseLog() {
    const entries = this.sourceData.split(/\n/).filter(entry => entry !== '');
    const lineParser = new Grok(this.pattern);
    const transformedData = entries.map(entry => lineParser.grokString(entry));
    const final = transformedData.map(entry => {
      return {
        ipAddress: entry.client,
        requestTimestamp: `${entry.day}/${entry.month}/${entry.year}:${entry.time}`,
        requestMethod: entry.method,
        requestPath: entry.url,
        requestStatus: entry.status,
        userAgent: entry.agent
      };
    })
    return JSON.stringify(final);
  }
}

module.exports = Parser;
