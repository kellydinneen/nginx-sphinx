const grok = require('grok-js');

class Grok {
  constructor(p, string) {
    this.pattern = patterns.createPattern(p);;
  }

  grokString(string) {
    grok.loadDefault((err, patterns) => {
    if (err) {
      console.error(err);
      return;
    }

    this.pattern.parse(string, (err, obj) => {
      if (err) {
        console.error(err);
        return;
      }
      return obj;
    });
  }

}

module.exports = Grok;
