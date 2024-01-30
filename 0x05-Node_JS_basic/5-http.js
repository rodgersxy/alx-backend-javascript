/**
 * create a small HTTP server using http module
 * it should be asigned to app variable that must be exported
 * HTTP server must listen on port 1245
 * it should return plain text
 * URL path is /, it should return Hello Holberton School!
 * URL path is /students, should display This is the list of our students
 *
 */
const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') res.write('Hello Holberton School!');
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    try {
      const data = await countStudents(process.argv[2]);
      res.end(`${data.join('\n')}`);
    } catch (error) {
      res.end(error.message);
    }
  }
  res.end();
});
app.listen(1245);
module.exports = app;
