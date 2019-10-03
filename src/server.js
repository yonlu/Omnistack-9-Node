const express = require('express');
const routes = require('./routes');

const app = express();

/* GET, POST, PUT, DELETE
 *
 * req.query = Access query params (e.g. filters)
 * req.params = Access route params (e.g. editing, deleting)
 * req.body = Access requisition's body (e.g. creating, editing)
 */

app.use(express.json());
app.use(routes);

app.listen(3333);
