const Block = require('./block')

class BlockChain {
  constructor() {
    this.chain = [this.createGenesisBlock()],
      this.difficulty = 3;
  }

  createGenesisBlock() {
    return new Block(0, '01/01/2017', 'Genesis Block', '0000');
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1]
  }

  addNewBlock(newBlock) {
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.mineBlock(this.difficulty);
    this.chain.push(newBlock);
  }

  isChainValide() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      if (currentBlock.hash != currentBlock.calculateHash()) {
        return false;
      }
      if (currentBlock.previousHash != previousBlock.hash) {
        return false;
      }
    }
    return true;
  }
}

module.exports = BlockChain