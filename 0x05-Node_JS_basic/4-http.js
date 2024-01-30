/** create a small HTTP server using http module
 * it should be asigned to app variable that must be exported
 * HTTP server must listen on port 1245
 */

const http = require('http');

const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

app.listen(port, () => {
});

module.exports = app;
