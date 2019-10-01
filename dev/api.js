const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.get('/blockchain', function (req , res) {
  res.send(bitcoin);
});

app.post('/transaction', function (req , res) {
  const blockIndex = bitcoin.createNewTransaction(req.body.amount , req.body.sender , req.body.recipient);
  res.json({ note: `transaction will be added in block ${blockIndex}`});
});

app.get('/mine', function (req , res) {

});

app.listen(5000 , function(){
  console.log('Listening on Port 5000...');
});
