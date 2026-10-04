import express from 'express';
import { MongoClient } from 'mongodb';
import path from 'path';

const dbName = 'Login';
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

const app = express();

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

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});