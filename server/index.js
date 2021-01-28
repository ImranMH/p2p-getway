const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 4000;
app.get('/', (_, res) => {
  res.json({ message: 'hello world' });
});

app.listen(port, () => {
  console.log(`app running at ${port}`);
});
