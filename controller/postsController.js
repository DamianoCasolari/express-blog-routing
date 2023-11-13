// const { text } = require("body-parser")
const posts = require("../db/postsDb")


function index(req, res) {
    res.format({
        html: () => {
            const htmlContent = []
            htmlContent.push("<ul style='list-style:none'>")
            for (const post of posts){
                htmlContent.push(`
                    <li>
                    <h3>${post.title}</h3>
                    <p>${post.content}</p>
                    <img src="/imgs/posts/${post.image}" alt="Immagine del post : ${post.title }">
                    </li>`)

            }
            htmlContent.push("</ul>")
            res.send(htmlContent.join(""))
            
        },
        json: () => {
            res.type("json").send(posts)
        }
    })
}

module.exports = {
    index
}