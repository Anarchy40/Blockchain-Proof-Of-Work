function Blockchain(){
  this.chain =[];
  this.newTransactions = [];

}

Blockchain.prototype.createNewBlock = function(nonce , previousBlockHash , hash) {
  const newBlock ={
    index: this.chain.lenght + 1,    //explains number of the block
    timestamp: Date.now(),
    transactions: this.newTransactions,
    nonce: nonce,
    hash: hash,
    previousBlockHash:previousBlockHash  //hash from the previous block
  };

  this.newTransactions = []; //so that we put all new transactionsinto this block
  this.chain.push(newBlock); //feeds new block into chain array

  return newBlock;
}
