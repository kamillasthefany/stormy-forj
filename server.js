require("dotenv").config();
const express = require('express');
const routes = require('./src/routes');
const PORT = process.env.PORT || 5000;
const app = express();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use(express.json());
app.use(routes);
app.listen(PORT, function () {
  console.log(`Server runing on port ${PORT}`);
})