const Blockchain = require('./Blockchain');

const bitcoin = new Blockchain();

bitcoin.createNewBlock(
  2758  , 'jkhjghgjgjhgggjg', 'jsafhlakjdhflkhasd'
);

bitcoin.createNewBlock(
  3333  , 'kikkdkjfs', 'poioiuyyy'
);
bitcoin.createNewBlock(
  4567  , 'rtuusjnjdjhsj', 'loijsndjjjsad'
);
console.log(bitcoin);
