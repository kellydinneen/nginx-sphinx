const Grok = require('./Grok');

class Parser {
  constructor(sourceLog) {
    this.sourceData = sourceLog;
    this.pattern = '%{IP:client} \\[%{INT:day}/%{MONTH:month}/%{INT:year}:%{TIME:time} -0700\\] "%{WORD:method} %{URIPATHPARAM:url} HTTP/1.1" %{INT:status} %{INT:someNumber} "%{DATA:mtag}" "%{DATA:agent}"';
  }

  parseLog() {

  }
}

module.exports = Parser;
