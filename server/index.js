const express = require('express');
const bodyParser = require('body-parser');
const newClient = require('../database/newClient');
const admin = require('../database/admin');

let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))



let port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

