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

router.get('/fetch_saved_users',(req,res)=>{
    async function fetchUsersList(){
        
        try{
            await client.connect()
            const database=client.db("SearchSAAS");
       
            const collection=database.collection(`SavedUsers`)
           
            const usersList=await collection.find().toArray()
            res.json({users:usersList, error:''})
        }
        catch(err){
            res.json({error: err.message, users:''})
        }
    }
    fetchUsersList()
})

router.post('/add-user',(req,res)=>{
    async function saveUsersList(){
        
        try{
            await client.connect()
            const database=client.db("SearchSAAS");
       
          //  const collection=database.collection(`Users`)
            const collection1 = database.collection(`SavedUsers`)
           const query = req.body
           const alreadyExists=await collection1.count( query,{limit:1})
           if(alreadyExists==1)
                return res.json({error:"This user is already saved!", refNo:''})
          //  const userData=await collection.find(query)
            const result = await collection1.insertOne(query)
            return res.json({refNo: result.insertedId, error:''})
        }
        catch(err){
            res.json({error: err.message, refNo:''})
        }
    }
    saveUsersList()
})

router.post('/delete-user',(req,res)=>{
    async function saveUsersList(){
        
        try{
            await client.connect()
            const database=client.db("SearchSAAS");
       
           
            const collection1 = database.collection(`SavedUsers`)
           const query = req.body
            
            const result = await collection1.deleteOne(query)
            res.json({refNo: result.insertedId, error:''})
        }
        catch(err){
            res.json({error: err.message, refNo:''})
        }
    }
    saveUsersList()
})








module.exports=router
