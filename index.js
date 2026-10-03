import express from 'express'
import { MongoClient } from 'mongodb'
const dbName='college'
const url='mongodb://127.0.0.1:27017'

const client=new MongoClient(url)

const app=express()
app.set("view engine",'ejs')

app.get('/',async(req,resp)=>{
    await client.connect();
    const db=client.db(dbName)
    const collection=db.collection('students')
    const result=await collection.find().toArray()
    resp.render('students',{students:result})
})

app.listen(3000)