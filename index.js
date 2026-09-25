import express from "express"
import home from "./Pages/home.js"
import contact from "./Pages/contact.js"
import about from "./Pages/about.js"


const app=express()

app.get("",(req,resp)=>{
    resp.send(home())
})
app.get("/about",(req,resp)=>{
    resp.send(about())
})
app.get("/contact",(req,resp)=>{
    resp.send(contact())
})
app.listen(3000)