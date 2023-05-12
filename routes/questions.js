var express = require('express')
var router = express.Router()
var mangodb = require('mangodb')
router.post('/save-post',async function(req,res,next) //receive req
{
    try{
        //take the data from req
        const dataObj = req.body.data
        //connect with db
        const url="mangodb://localhost:27017"
        const mangodbClient = mangodb.mangodbClient
        const server=await mangodbClient.connect(url)
        const db=server.db('school')
        const collection=db.collection('questions')
        //perform require operations
        const result=await collection.insertOne(dataObj)
        //prepare and send res back to client
        res.send(result)
    }
    catch(e)
    {
        console.log(e)
        res.send(e)
    }
    
})
module.export=router;