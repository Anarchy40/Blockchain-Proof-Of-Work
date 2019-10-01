const Blockchain = require('./Blockchain');

const bitcoin = new Blockchain();

bitcoin.createNewBlock(56565 , 'hyujrhytdshr' , '09jhdhfyyvroayf');

bitcoin.createNewTransaction(100,'alex5uehufrf' , 'jane8hkhjafghdg');

bitcoin.createNewBlock(88688 , 'yrutuhuhlajhf' , 'weetyghagsdfhj');

bitcoin.createNewTransaction(50,'alex5uehufrf' , 'jane8hkhjafghdg');
bitcoin.createNewTransaction(300,'alex5uehufrf' , 'jane8hkhjafghdg');
bitcoin.createNewTransaction(2000,'alex5uehufrf' , 'jane8hkhjafghdg');


bitcoin.createNewBlock(765757 , 'jhustvhhgygye' , 'njhjhjhsdybgcdvgf');

console.log(bitcoin.chain[2]);
