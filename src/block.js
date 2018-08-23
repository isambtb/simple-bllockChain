const SH256 = require('crypto-js/sha256')

class Block {
  // index : where the block is on the chain
  // timeStamp: when the block was created 
  // any data to store 
  // previousHash String that contains the Hash of the previous block 

  constructor(index, timeStamp, data, previousHash = '') {
    this.index = index;
    this.timeStamp = timeStamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();
    this.nonce = 0;
  }

  calculateHash() {
    return SH256(this.index
      + this.timeStamp
      + JSON.stringify(this.data)
      + this.previousHash
      + this.nonce).toString()
  }

  mineBlock(difficulty) {
    while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
      this.nonce++;
      this.hash = this.calculateHash();
    }
    console.log("block mined: " + this.hash);
  }

}

module.exports = Block