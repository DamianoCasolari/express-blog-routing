//Import built-in and external packs
const express = require("express")
const path = require("path")
const dotenv = require("dotenv")

//Configure external packs
dotenv.config()
const app = express()


//Import project files
const {home} = require("./controller/homeController")
const postsRouter = require("./routers/posts")

//Create a static file : public

app.use(express.static("public"))
app.use(express.static("css"))

//Create routes
app.get("/", home)
app.use("/posts", postsRouter)

//Bind server to specific PORT
app.listen(3000, console.log("server working correctly http://localhost:3000"))


