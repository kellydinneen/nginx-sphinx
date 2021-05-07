const ModeFinder = require('./ModeFinder');

class Query {
  constructor(log) {
    this.log = log;
    this.entriesForDate = [];
  }

  filterLogByDate(date) {
    this.entriesForDate = log.filter(e => e.requestTimestamp.startsWith(date));
    if (this.entriesForDate.length < 1) return false;
    return true;
  }

  getTopProperty(property) {
    if (!this.filterLogByDate(date)) return 'invalid date';
    if (property === 'request') {
      this.entriesForDate = this.entriesForDate.map(e => {request: `${e.requestMethod} ${e.requestPath}`})
    }
    const finder = new ModeFinder(this.entriesForDate, property);
    finder.createFrequencyTable();
    return finder.findMode();
  }
}

module.exports = Query;
