import { createServer } from "http";

createServer((req, res) => {
  console.log(req);

  res.end(
    JSON.stringify({
      entries: ["Hello world!"],
    })
  );
}).listen(8000);
