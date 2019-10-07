const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

mongoose.connect(
  'mongodb+srv://omnistack9:omnistack9@cluster0-nzt23.mongodb.net/semana09?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

/* GET, POST, PUT, DELETE
 *
 * req.query = Access query params (e.g. filters)
 * req.params = Access route params (e.g. editing, deleting)
 * req.body = Access requisition's body (e.g. creating, editing)
 */

app.use(express.json());
app.use(routes);

app.listen(3333);
