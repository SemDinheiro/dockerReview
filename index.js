import express from 'express';

const PORT = 3000;
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Root');
});

app.get('/costumer', (req, res) => {
  res.status(200).send('Costumer');
});

app.listen(PORT, () => {
  console.log('running at port ' + PORT);
});
