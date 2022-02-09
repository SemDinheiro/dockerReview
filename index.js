import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Root');
});

app.get('/costumer', (req, res) => {
  res.status(200).send('Costumer');
});

app.listen(3000, () => {
  console.log('running at port 3000');
});
