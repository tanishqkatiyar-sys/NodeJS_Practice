import mongoose from "mongoose";
import express from "express";
import studentModel from "./model/studentModel.js";

const app = express();

app.use(express.json());

await mongoose.connect("mongodb://127.0.0.1:27017/college")
    .then(() => {
        console.log("_______Connected________");
    });

app.get("/", async (req, resp) => {
    const studentData = await studentModel.find();
    resp.send(studentData);
});

app.post('/save', async (req, resp) => {

    console.log(req.body);

    if (!req.body) {
        return resp.send({
            message: "data not stored",
            success: false,
            storedInfo: null
        });
    }

    const { name, age, email } = req.body;

    if (!name || !age || !email) {
        return resp.send({
            message: "data not stored",
            success: false,
            storedInfo: null
        });
    }

    const studentdata = await studentModel.create(req.body);

    resp.send({
        message: "data stored",
        success: true,
        storedInfo: studentdata
    });
});


app.put('/update/:id',async(req,resp)=>{
    const id=req.params.id
    const studentData = await studentModel.findByIdAndUpdate(
    id,
    { ...req.body },
    { new: true }
);
    resp.send({
        message:"Data Updated",
        success:true,
        info:studentData
    })
})

app.delete('/delete/:id',async(req,resp)=>{
    const id=req.params.id;
    const studentData=await studentModel.findByIdAndDelete(id);
    resp.send({
        message:"Data Deleted",
        success:true,
        info:studentData
    })
})

app.listen(3000, () => {
    console.log("Server running on port 3000");
});