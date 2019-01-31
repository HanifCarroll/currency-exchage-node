const express = require('express');
const cors = require('cors');
const convert = require('./convert');

const app = express();

app.get('/exchange/:from/:to/:amount', (req, res) => {
  const { from, to, amount } = req.params;
  const total = convert(from, to, amount).toString();

  res.send(total);
});

app.use(cors());

app.listen(8080, () => console.log('Server started...'));
