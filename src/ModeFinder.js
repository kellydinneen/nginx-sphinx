class ModeFinder {
  constructor(array, property) {
    this.array = array;
    this.property = property;
    this.hash = {};
  }

  createFrequencyTable() {
    const p = this.property
    let hash = {};
    this.array.forEach(e => {
      if (e[p] in hash){
        hash[e[p]]++
      } else {
        hash[e[p]] = 1
      }
    })
    this.hash = hash;
  }

  findMode() {
    const h = this.hash;
    let max_count = 0;
    let top = [];
    for (const e in h) {
      if (max_count < h[e]) {
        max_count = h[e];
        top = [e];
      } else if (max_count === h[e]) {
        top.push(e);
      }
    }
    top = top.length === 1 ? top[0] : top;
    return { property: top, frequency: max_count };
  }
}

module.exports = ModeFinder;
