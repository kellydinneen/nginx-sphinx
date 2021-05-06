const grok = require('grok-js');

class Grok {
  constructor(pattern) {
    this.p = pattern;
  }

  grokString(string) {
    try {
      const patterns = grok.loadDefaultSync();
      const pattern = patterns.createPattern(this.p);
      return pattern.parseSync(string);
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = Grok;
