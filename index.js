import express from 'express';

const HOST = process.env.HOST;
const PORT = process.env.PORT;
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Root');
});

app.get('/costumer', (req, res) => {
  res.status(200).send('Costumer');
});

app.listen(PORT, () => {
  console.log('running at http://' + HOST + ':' + PORT);
  setTimeout(process.exit(), 10000);
});
