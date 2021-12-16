const express = require('express');
const app = express();
const configRoutes = require('./routes');
const bodyParser = require('body-parser');
app.use(express.json());
app.use(bodyParser.urlencoded());
configRoutes(app);

app.set('view engine', 'hbs');

app.listen(3000, () => {
  console.log("We've now got a server!");
  console.log('Your routes will be running on http://localhost:3000');
});
