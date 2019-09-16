const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 3030

app.listen(PORT, (err) => {
  console.log(err || `server listening on port ${PORT}`)
});