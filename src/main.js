const Block = require('./block')
const BlockChain = require('./blockChain')


let issamChain = new BlockChain()
console.log("Mining Block 1 ....");
issamChain.addNewBlock(new Block(1, '02/01/2017', { amount: 477 }));
console.log("Mining Block 2 ....");
issamChain.addNewBlock(new Block(2, '03/01/2017', { amount: 475 }));
console.log("Mining Block 3 ....");
issamChain.addNewBlock(new Block(3, '04/01/2017', { amount: 456 }));

//console.log("is chain isChainValide :" + issamChain.isChainValide());

//issamChain.chain[1].data = { amount: 5 };
//issamChain.chain[1].hash = issamChain.chain[1].calculateHsh();

//console.log("is chain isChainValide :" + issamChain.isChainValide());

//console.log(JSON.stringify(issamChain, null, 4));