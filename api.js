const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.send("Hello From a very simple electron and express application!")
})

const startServer = () => {
  app.listen(3000, () => {
    console.log("Server started on port 3000")
  })
}

module.exports = { startServer }
