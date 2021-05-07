class ModeFinder {
  constructor(array, property) {
    this.array = array;
    this.property = property;
    this.hash = {};
  }

  createFrequencyTable() {
    let hash = {};
    this.array.forEach(e => {
      if (e[property] in hash.keys()){
        hash[e[property]]++
      } else {
        hash[e[property]] = 1
      }
    })
    this.hash = hash;
  }

  findMode() {
    max_count = 0;
    top = [];
    for (e in this.hash) {
      if (max_count < this.hash[e]) {
        max_count = this.hash[e];
        top = [e];
      }
      if (max_count === this.hash[e]) {
        top.push(e);
      }
    }
    return [top, max_count];
  }
}
