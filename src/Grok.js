const grok = require('grok-js');
// const ngrok = require('node-grok');

class Grok {
  constructor(pattern) {
    this.p = pattern;
  }

  async grokString(string) {
    console.log(1)
    return await grok.loadDefault(async (err, patterns) => {
      if (err) {
        console.error(err);
        return;
      }

      const pattern = patterns.createPattern(this.p);

      return await pattern.parse(string, (err, obj) => {
        if (err) {
          console.error(err);
          return;
        }

        console.log(2);
        return obj;
      });
    });
    // try {
    //   const patterns = grok.loadDefaultSync();
    //   const pattern = patterns.createPattern(this.p);
    //   return pattern.parseSync(string);
    // } catch (err) {
    //   console.error(err);
    // }
  }
}

module.exports = Grok;
