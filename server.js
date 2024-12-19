const express = require('express');
const mongoose = require('mongoose');
const TaskSchema = require('./model');


const app = express();
app.use(express.json());
app.get('/', (req, res) => { 
    res.send("Hello World");
});
mongoose.connect('mongodb+srv://abcd:abcd@cluster0.mhi7q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=> console.log('DB connected'))
app.post('/addtask',async(req, res) => {
    const { todo } = req.body;
    try {
        const newData = new TaskSchema({
            todo: todo
        });
        await newData.save();
        return res.json(await TaskSchema.find())
    }
    catch (err) {
        console.log(err)
    }
})
app.listen(5000,()=> console.log("server is running...."))