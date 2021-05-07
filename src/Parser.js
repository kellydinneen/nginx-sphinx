const Grok = require('./Grok');

class Parser {
  constructor(sourceLog) {
    this.sourceData = sourceLog;
    this.pattern = '%{IP:ipAddress} - - \\[%{HTTPDATE:requestTimestamp}\\] "%{WORD:requestMethod} %{URIPATHPARAM:requestPath} HTTP/1.1" %{INT:requestStatus} %{INT:bytes} "%{DATA:mtag}" "%{DATA:agent}"';
  }

  async parseLog() {
    const entries = this.sourceData.split(/\n/).filter(entry => entry !== '');
    const lineParser = new Grok(this.pattern);
    const transformedData = await entries.map((entry, i) => {
      console.log('mapping', i)
      lineParser.grokString(entry)
    });
    console.log(3, transformedData);
    const cleanedData = transformedData.map(e => {
        delete e.mtag;
        delete e.bytes;
        return e;
      });
    return JSON.stringify(transformedData);
  }
}

module.exports = Parser;
