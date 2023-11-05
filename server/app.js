const express = require('express');
const app = express();
const port = process.env.port || 2000
const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/social")
const db = mongoose.connection
db.on("open", ()=> {
    console.log('MongoDb is running');
})
db.on('error', (err) => {
    console.log("Error", err);
})

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(require("./router/index"))
app.listen(port, ()=>{
    console.log("server runnning");
})