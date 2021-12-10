const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).send('Aprenda!');
});

app.get('/error', (req, res) => {
  throw new Error('some error');
});

app.use((err, req, res, next) => {
  res.status(500).send('Error');
});

app.listen(3000, () => {
  console.log('running at port 3000');
});
