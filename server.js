const express = require('express'); // importing a CommonJS module
const helmet = require('helmet');

const hubsRouter = require('./hubs/hubs-router.js');

const server = express();

function dateLogger(req, res, next) {
  console.log(new Date().toISOString());

  next();
}


function origin(req, res, next) {
  console.dir(req.originalUrl)
  console.dir(req.method)


  next();
}
// Global Middleware
server.use(helmet());
server.use(express.json());
server.use(dateLogger);
server.use(origin);

server.use('/api/hubs', hubsRouter);

server.get('/', (req, res) => {
  const nameInsert = (req.name) ? ` ${req.name}` : '';

  res.send(`
    <h2>Lambda Hubs API</h2>
    <p>Welcome${nameInsert} to the Lambda Hubs API</p>
    `);
});

module.exports = server;
