// const grok = require('grok-js');

class Grok {
  constructor(log) {
    this.log = log;
    this.grokked = [];
  }

  grokEntries() {
    let entries =[];
    this.log.forEach(e => entries.push(this.grokString(e)))
    return entries;
  }

  grokString(string) {
    let entry = {}
    const split = string.split(' ');
    entry.ipAddress = split[0];
    entry.requestTimestamp = split[3].slice(1) + ' ' + split[4].slice(0, split[4].length - 1);
    entry.requestMethod = split[5].slice(1);
    entry.requestPath = split[6];
    entry.requestStatus = split[8];
    entry.agent = this.grokAgent(split);
    return entry;
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
