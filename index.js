import express from 'express'

const app = express()

app.set("view engine", "ejs")

// Middleware to read form data
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.get('/', (req, resp) => {
    resp.render("addUser")
})

app.post('/submit', (req, resp) => {
    console.log(req.body)
    resp.render("submitUser", req.body)
})

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000")
})