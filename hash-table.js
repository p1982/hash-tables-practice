const sha256 = require('js-sha256');

// Do not change this
class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {

  constructor(numBuckets = 4) {
    // fill this in
    // this.data = new Array(numBuckets)
    this.capacity = numBuckets
    this.count = 0
    this.data = new Array(this.capacity).fill(null);
    // for (let i = 0; i < numBuckets; i++) {
    //   this.data[i] = null
    // }
  }

  hash(key) {
    let temp = sha256(key).slice(0,8)
    let hash=parseInt(temp,16)
    return hash;
  }

  hashMod(key) {
    return this.hash(key) % this.capacity;
  }

  insert(key, value) {
    // let index = this.hashMod(key);
    // this.data[index]={key,value}
    // this.count++
    // return index
    const newNode = new KeyValuePair(key,value)
    let index = this.hashMod(key);
    if(this.data[index]===null){
      this.data[index]=newNode
      
    }else{
      let curent = this.data[index]
      this.data[index]=newNode
      this.data[index].next=curent
    }
    this.count++
    return index
  }

}

module.exports = HashTable;