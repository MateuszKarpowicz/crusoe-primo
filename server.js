const express = require('express');
const path = require('path');

const app = express();

// Inne konfiguracje aplikacji Express

app.use(express.static(path.join(__dirname, 'src')));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'src', 'index.html'), function(err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(3000, function() {
  console.log('Serwer nasłuchuje na porcie 3000');
});
