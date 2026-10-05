import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';
import path from 'path';

const dbName = 'Login';
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

const app = express();
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }));

// Display HTML form
app.get('/', (req, resp) => {
    const absPath = path.resolve('public', 'index.html');
    resp.sendFile(absPath);
});

// Receive form submission on /
app.post('/', async (req, resp) => {
    try {
        console.log(req.body);

        await client.connect();

        const db = client.db(dbName);
        const collection = db.collection('login_credential');

        await collection.insertOne({
            email: req.body.email,
            testValue: req.body.password
        });

        resp.send('Form submitted successfully');
    } catch (error) {
        console.error(error);
        resp.status(500).send('Database error');
    }
});

app.get('/ui', async (req, resp) => {
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection('login_credential');

    const result = await collection.find().toArray();

    resp.render('students', { students: result })

})

app.get('/delete/:id', async (req, resp) => {
    await client.connect();

    const db = client.db(dbName);
    const id = req.params.id;
    const collection = db.collection('login_credential')
    const result = await collection.deleteOne({
        _id: new ObjectId(id)
    })
    if (result) {
        resp.send("Student record deleted")
    } else {
        resp.send("student record not deleted")
    }


})

app.get('/ui/student/:id', async (req, resp) => {

    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection('login_credential');

    const id = req.params.id;

    const student = await collection.findOne({
        _id: new ObjectId(id)
    });

    resp.render('update', { student: student });
});

app.post('/ui/student/:id', async (req, resp) => {

    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection('login_credential');

    const id = req.params.id;

    await collection.updateOne(
        { _id: new ObjectId(id) },
        {
            $set: 
                req.body
            
        }
    );

    resp.redirect('/ui');
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});