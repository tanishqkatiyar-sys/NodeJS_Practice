import express from "express"
import path from "path"


const app=express()
app.use(express.static("Css"));



app.get('',(req,resp)=>{
    const abspath=path.resolve('Pages/login.html')
    resp.sendFile(abspath)
})
app.post('/home',(req,resp)=>{
    const abspath=path.resolve('Pages/home.html')
    resp.sendFile(abspath)
})
app.get('/about',(req,resp)=>{
    const abspath=path.resolve('Pages/about.html')
    resp.sendFile(abspath)
})

app.use((req,resp)=>{
    const absPath=path.resolve("Pages/404page.html")
    resp.status(404).sendFile(absPath)
})

app.listen(3000)