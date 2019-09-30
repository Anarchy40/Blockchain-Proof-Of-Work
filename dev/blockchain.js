function Blockchain(){
  this.chain =[];
  this.pendingTransactions = []; //pending transactions property

}

Blockchain.prototype.createNewBlock = function(nonce , previousBlockHash , hash) {
  const newBlock ={
    index: this.chain.length + 1,    //explains number of the block
    timestamp: Date.now(),
    transactions: this.pendingTransactions,
    nonce: nonce,
    hash: hash,
    previousBlockHash:previousBlockHash  //hash from the previous block
  };

  this.pendingTransactions = []; //so that we put all new transactionsinto this block
  this.chain.push(newBlock); //feeds new block into chain array

  return newBlock;
}

Blockchain.prototype.getLastBlock = function(){
  return this.chain[this.chain.length -1];
}

Blockchain.prototype.createNewTransaction =function(amount , sender , recepient) {
  const newTransaction = {
    amount: amount,
    sender: sender,
    recepient: recepient
  }; // creates new transaction and pushes it to pending transactions

  this.pendingTransactions.push(newTransaction);

  return this.getLastBlock()['index'] + 1; 
}

module.exports = Blockchain;
