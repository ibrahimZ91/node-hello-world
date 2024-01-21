'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
<<<<<<< HEAD
  res.send('Hello World....!!!!');
=======
  res.send('Hello, world!!!');
>>>>>>> 46420ec8b571534689f8b43f8a4752de1604915d
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
