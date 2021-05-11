// const grok = require('grok-js');

class Grok {
  constructor() {
    this.schema = {
      ipAddress: '',
      requestTimestamp: '',
      requestMethod: '',
      requestPath: '',
      requestStatus: '',
      agent: ''
    };
  }

  grokString(string) {
    const split = string.split(' ');
    this.schema.ipAddress = split[0];
    this.schema.requestTimestamp = split[3].slice(1) + ' ' + split[4].slice(0, split[4].length - 1);
    this.schema.requestMethod = split[5].slice(1);
    this.schema.requestPath = split[6];
    this.schema.requestStatus = split[8];
    this.schema.agent = this.grokAgent(split);
    return this.schema;
  }

  grokAgent(agentParts) {
    let agent = '';
    agentParts.slice(11).forEach((part, i) => {
      if (i !== 0) {
        part = ' ' + part;
      }
      return agent += part
    });
    return agent.slice(1, agent.length - 1)
  }
  
}

module.exports = Grok;
