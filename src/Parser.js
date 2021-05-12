const Grok = require('./Grok');

class Parser {
  constructor(sourceLog) {
    this.sourceData = sourceLog;
    this.pattern = '%{IP:ipAddress} - - \\[%{HTTPDATE:requestTimestamp}\\] "%{WORD:requestMethod} %{URIPATHPARAM:requestPath} HTTP/1.1" %{INT:requestStatus} %{INT:bytes} "%{DATA:mtag}" "%{DATA:agent}"';
  }

  parseLog() {
    const entries = this.sourceData.split(/\n/).filter(entry => entry !== '');
    const lineParser = new Grok(entries);
    const transformedData = lineParser.grokEntries();
    return JSON.stringify(transformedData);
  }
}

module.exports = Parser;
