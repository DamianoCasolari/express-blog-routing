const express = require("express")
const path = require("path")
const dotenv = require("dotenv")

dotenv.config()
const app = express()


app.get("/", index)
app.get("/posts", index)


app.listen(3000, console.log("server working correctly http://localhost:3000"))