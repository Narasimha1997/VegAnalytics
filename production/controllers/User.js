var express = require('express')

var router = express.Router()
var USER = require('../models/CRUD/User').User
var user = new USER()

router.post('/create', (req, resp) => {
    user.create(req.body, (err, result) => {
        console.log(err)
        if(err) resp.send(JSON.stringify({error : true, message : "Unable to create user"}))
        else resp.send(JSON.stringify({error : false, result : result}))
    })
})

router.post('/auth', (req, resp) => {
    console.log(req.body)
    user.read({email : req.body.email, password : req.body.password}, (err, result) => {
        if(err) resp.send(JSON.stringify({error : true, message : "Auth falied"}))
        else {
            result.toArray((err, result) => {
                resp.send(JSON.stringify({error : false, result : result}))
            }) 
        }
    })
})

module.exports.User = router