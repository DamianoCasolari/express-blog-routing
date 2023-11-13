const app = require("express")
const path = require("path")
const fs = require("fs")


const HomePagePath = path.join("__dir", "..", "index.html")

function home(req, res) {
    const HomePageHtml = fs.readFileSync(HomePagePath, "utf-8")
    res.send(HomePageHtml)
}

module.exports = {
    home
}