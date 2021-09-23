const express=require('express')
const router = express.Router()
const { MongoClient } = require("mongodb");
const uri ='mongodb+srv://shivanshu:1234567890@cluster0.h5ldf.mongodb.net/management?retryWrites=true&w=majority';


const client = new MongoClient(uri,{useUnifiedTopology:true,useNewUrlParser:true});


router.get('/test',(req,res)=>{
    return res.json({"message": "working"})
})


router.get('/fetch_users',(req,res)=>{
    async function fetchUsersList(){
        
        try{
            await client.connect()
            const database=client.db("SearchSAAS");
       
            const collection=database.collection(`Users`)
           
            const usersList=await collection.find().toArray()
            res.json({users:usersList})
        }
        catch(err){
            res.json({error: err.message})
        }
    }
    fetchUsersList()
})






module.exports=router
