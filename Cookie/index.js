import express from 'express'

const app=express();

app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}))

app.get('/login',(req,resp)=>{
    resp.render('login')
})

app.post('/profile',(req,resp)=>{
    resp.setHeader("Set-Cookie",'name='+req.body.username)
    resp.render('profile')
})

app.get('/profile', (req, res) => {
    res.render('profile');
});

app.get('/home',(req,resp)=>{
    let cookiesData=req.get('cookie');
    // cookiesData=cookiesData.split(";")
    cookiesData=cookiesData.split("=")
    console.log(cookiesData)
    resp.render('home',{name:cookiesData[1]})
})


app.listen(3000)