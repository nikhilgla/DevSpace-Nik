const MongoClient = require('mongodb').MongoClient
const dotenv = require('dotenv')
dotenv.config()

// const url = 'mongodb+srv://nikhilcloud:nikhilcloud@cluster0.8hdbqxe.mongodb.net/test';
const url = 'mongodb+srv://nikhilcloud:nikhilcloud@devspace.ow9dy.mongodb.net/?retryWrites=true&w=majority&appName=DevSpace'

MongoClient.connect(url ,(err,client)=>{
    if(err) throw err;

    console.log("db connected....")
    module.exports=client

    const app =require('./app')
    app.listen(process.env.PORT,()=>{
        console.log("server listening on 8000...")
    })
})