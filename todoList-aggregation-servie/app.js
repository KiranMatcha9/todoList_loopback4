const express = require('express');
require('express-async-errors')
const app = express();
const deafultRoute = require("./adapters/internal/default-adapter");
const routes = require("./adapters/internal/todoList-adpater");
const ErrorHandler = require('./middleware/errorHandler');
const notFound = require('./middleware/not-found');
app.use(express.json());
app.use('/',deafultRoute);
app.use('/api',routes);
app.use(notFound);
app.use(ErrorHandler);

app.listen(4000,() => console.log(`server is listening to the port 5000`));