var express = require('express')
var router = express.Router()

router.get('/get-test',function(req,resp) //request received
{
    //take the data from request
    //connect with db
    //perform required operation
    //prepare and send the response back to client
    resp.send('My name is  sachin .I am from Mumbai');

})
router.get('/test-query',function(req,resp,next)//request received
{
    //take the data from request
    const n=req.query.name
    const l=req.query.loc
    resp.send(`My name is ${n},I am from ${l}`)

}
)
router.patch('/test-path/:name/:loc',function(req,resp,next)//request received
{
    //take the data from request
    const n=req.params.name
    const l=req.params.loc
    resp.send(`My name is ${n},I am from ${l}`)

}
)
router.put('/test-headers',function(req,resp,next)//request received
{
    //take the data from request
    const n=req.headers.name
    const l=req.headers.loc
    resp.send(`My name is ${n},I am from ${l}`)

}
)
router.post('/test-post',function(req,resp,next)//request received
{
    //take the data from request
    const n=req.body.name
    const l=req.body.loc
    resp.send(`My name is ${n},I am from ${l}`)

}
)

module.export=router;