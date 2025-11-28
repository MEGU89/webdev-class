// const http = require("http");///http is routing server.
// const fs = require("fs");

// const server = (req, res) => {
//   res.writeHeader(200, { "Content-Type": "text/html" });

//   if (req.url === "/") {
//     res.write("Welcome to home page");
//     res.end();
//   } else if (req.url === "/about") {
//     res.write("Welcome page");
//     res.end();
//   } else if (req.url === "/rfile") {
//     fs.readFile("indexPromise.js", "utf-8", (error, data) => {
//       if (error) {
//         res.write("Error reading file");
//       } else {
//         res.write(`<pre>${data}</pre>`);///preformatted text--<pre>
//       }
//       res.end();
//     });
//   } else {
//     res.write("Page not found");
//     res.end();
//   }
// };

// http.createServer(server).listen(3000, (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Server is running on port: http://localhost:3000");
//   }
// });

const express = require("express");
const app = express();
const path = require("path");
const publicPath = path.join(__dirname, "public");

app.get("/", (req, res) => {
  res.send("Welcome to express js");
})

app.get("/about", (req, res) => {
  res.send("About page");
})
app.get("/htmlfile", (req, res) => {
  res.sendFile(`${publicPath}/mypage.html`);
  })
app.listen(3000, (error) => {
  if(error)
  {
    console.log(error);
  }
  console.log("Server is running on port: http://localhost:3000");
})
