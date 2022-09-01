// import express from "express"
// import cors from "cors"
// import mongoose from "mongoose"
 
const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://root:<password>@cluster0.wpvoojt.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });


// ,{
//     useNewUrlParser:true,
//     useCreateIndex:true,
//     useUnifiedTopology:true,
//     useFindAndModify:false
// }


const DB='mongodb://pavan:pavan123@ac-yweahhq-shard-00-00.myvyjn2.mongodb.net:27017,ac-yweahhq-shard-00-01.myvyjn2.mongodb.net:27017,ac-yweahhq-shard-00-02.myvyjn2.mongodb.net:27017/?ssl=true&replicaSet=atlas-j3euoi-shard-0&authSource=admin&retryWrites=true&w=majority';

mongoose.connect(DB).then(()=>{
    console.log("connected to database succesully")
}).catch((err)=>{   
    console.log('connection failed');
});

// mongoose.connect("mongodb://localhost:27017/login", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }, () => {
//     console.log("mongodb connected...")
// })


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})


const User = new mongoose.model("User", userSchema)
//Routes
app.post("/login", (req, res)=> {
    const { email, password} = req.body
    User.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "successful login ", user: user})
            } else {
                res.send({ message: "Incorrect password"})
            }
        } else {
            res.send({message: "user not registered"})
        }
    })
}) 

app.post("/register", (req, res)=> {
    const { name, email, password} = req.body
    User.findOne({email: email}, ( user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new User({
                name,
                email,
                password
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully registered" })
                }
            })
        }
    })
    
}) 

app.listen(9002,() => {
    console.log("server started at port 9002")
})