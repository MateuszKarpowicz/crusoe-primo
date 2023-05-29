const express = require('express');
const path = require('path');

const app = express();

// Konfiguracje aplikacji Express

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'path/to/your/index.html'), function(err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(3000, function() {
  console.log('Serwer nasłuchuje na porcie 3000');
});