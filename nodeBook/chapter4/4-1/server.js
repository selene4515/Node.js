const http = require("http");
const fs = require("fs").promises;

http
  .createServer(async (req, res) => {
    try {
      const data = await fs.readFile(__dirname + "/server.html");
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(data);
    } catch (error) {
      console.error(error);
      res.writeHead(500, { "Content-Type": "text/html; charset=utf-8" });
      res.end(error.message);
    }
  })
  .listen(8080, () => {
    console.log("8080번 포트에서 서버 대기중");
  });
