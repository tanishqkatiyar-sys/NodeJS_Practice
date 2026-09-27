import express from 'express'

const app=express()
 app.use(express.urlencoded({extended:false}))



app.get('/', (req, resp) => {
    resp.send(`
        <h1>Student Form</h1>

        <form action="/submit" method="POST">
            <label>Name:</label>
            <input type="text" name="name"><br><br>

            <label>Email:</label>
            <input type="email" name="email"><br><br>

            <label>Age:</label>
            <input type="number" name="age"><br><br>

            <button type="submit">Submit</button>
        </form>
    `);
});
app.post('/submit',(req,resp)=>{
    resp.send(`
        <h2>Form Submitted Successfully!</h2>
        <p>Name: ${req.body.name}</p>
        <p>Email: ${req.body.email}</p>
        <p>Age: ${req.body.age}</p>
    `)
})


app.listen(3000)
