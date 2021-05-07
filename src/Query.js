class Query {
  constructor(log) {
    this.log = log;
  }

  validateDate(date) {
    const entriesForDate = log.filter(e => e.requestTimestamp.startsWith(date));
    return entriesForDate.length > 0;
  }

  getTopAgent(date) {
    if (this.validateDate(date)) return 'invalid date';
  }

  getTopRequest(date) {
    //return request verb and path + number of uses
  }

}

module.exports = Query;
