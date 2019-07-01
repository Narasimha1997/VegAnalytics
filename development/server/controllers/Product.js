var express = require('express')

var router = express.Router()
var Product = require('../models/CRUD/Product').Product
var product = new Product()

router.post('/create', (req, resp) => {
    product.create(req.body, (err, result) => {
        if(err) resp.send(JSON.stringify({error : true, message : "Unable to add product"}))
        else resp.send(JSON.stringify({error : false, result : result}))
    })
})

router.post('/updatePrice', (req, resp) => {
    product.update(req.body.objectID,  {cost : req.body.cost}, (err, result) => {
        if(err) resp.send(JSON.stringify({error : true, message : "Unable to update price"}))
        else resp.send(JSON.stringify({error : false, result : result}))
    })
})

router.post('/updateQuantity', (req, resp) => {
    //get previous quantity and update it : 
    product.read({'_id' : req.objectID}, (err, result) => {
        if(!err) {
            result.toArray((err, result) => {
                var quantity = result[0].quantity - req.body.quantity
                product.update(req.objectID, {quantity : quantity}, (err, result) => {
                    if(err) resp.send(JSON.stringify({error : true, message : "Unable to update product"}))
                    else resp.send(JSON.stringify({error : false, result : quantity}))
                })
            })
        }
    })
})

router.post('/getProducts', (req, resp) => {
    product.read({userID : req.body.userID}, (err, result) => {
        if(err) resp.send(JSON.stringify({error : true, message : "Unable to get products"}))
        else {
            result.toArray((err, result) => {
                resp.send({error : false, result : result})
            })
        }
    })
})

router.post('/delete', (req, resp) => {
    product.delete(req.body.objectID, (err, result) => {
        if(err) resp.send(JSON.stringify({error : true, message : "Unable to delete product"}))
        else resp.send(JSON.stringify({error : false, result : result}))
    })
})

module.exports.Product = router