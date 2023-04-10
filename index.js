const fs = require("fs")
const http = require("http")
const url = require("url")

////////////////////////////////////////////////////////////////////////
// Blocking SYNCHRONOUS WAY - of reading and writing files
/*
const textIn = fs.readFileSync("./txt/input.txt", "utf-8")
console.log(textIn)

const textOut = `This is what we know about the avacado: ${textIn}.\nCreated on ${Date.now()}`
fs.writeFileSync("./txt/output.txt", textOut)
console.log("File has been written")
*/

////////////////////////////////////////////////////////////////////////

// non-Blocking ASYNCHRONOUS WAY - of reading and writing files
/*
fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
  console.log(data)
})
console.log("Will read file!")
*/

///////////////////////////////////////////////////////////////////////
// http SERVER
const server = http.createServer((req, res) => {
  const pathName = req.url

  if (pathName === "/" || pathName === "/OVERVIEW") {
    res.end("This is the OVERVIEW")
  } else if (pathName === "/product") {
    res.end("This is the PRODUCT")
  }
})

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to request on port 8000")
})
