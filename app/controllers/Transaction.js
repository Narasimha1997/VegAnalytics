const express = require('express')

const router = express.Router()
const Transaction = require('../models/CRUD/Transactions').Transaction
const transaction = new Transaction()

const {profitPerDay, profitPerMonth, profitProportionMonth, getTransactionHistory, getTransactionPerMonth, productSharePerMonth} = require('../models/CRUD/aggregations')

router.post('/perMonth', (req, resp) => {
    profitPerDay(req.body.userID, req.body.productID, req.body.month, req.body.year, (err, result) => {
        if(err) resp.send(JSON.stringify({error : true, message : "Unable to fetch transaction details"}))
        else resp.send(JSON.stringify({error : false, result : result}))
    })
})

router.post('/proportionMonth', (req, resp) => {
    profitProportionMonth(req.body.userID, req.body.month, req.body.year, (err, result) => {
        if(err) resp.send(JSON.stringify({error : true, message : "Unable to fetch transaction details"}))
        else resp.send(JSON.stringify({error : false, result : result}))
    })
})

router.post('/perProductSummary', (req, resp) => {
    profitPerMonth(req.body.userID, req.body.productID, req.body.year, (err, result) => {
        console.log(result)
        if(err) resp.send(JSON.stringify({error : true, message : "Unable to fetch transaction details"}))
        else resp.send(JSON.stringify({error : false, result : result}))
    })
})

router.post('/yearWise', (req, resp) => {
    getTransactionHistory(req.body.userID, req.body.year, (err, result) => {
        console.log(result)
        if(err) resp.send(JSON.stringify({error : true, message : "Unable to fetch transaction details"}))
        else resp.send(JSON.stringify({error : false, result : result}))
    })
})

router.post('/monthWise', (req, resp) => {
    getTransactionPerMonth(req.body.userID, req.body.productID, req.body.month,  req.body.year, (err, result) => {
        if(err) resp.send(JSON.stringify({error : true, message : "Unable to fetch transaction details"}))
        else resp.send(JSON.stringify({error : false, result : result}))
    })
})

router.post('/productProportion', (req, resp) => {
    productSharePerMonth(req.body.userID, req.body.month, req.body.year, (err, result) => {
        if(err) resp.send(JSON.stringify({error : true, message : "Unable to fetch transaction details"}))
        else resp.send(JSON.stringify({error : false, result : result}))
    })
})

//normal CRUD transactions :

router.post('/getN', (req, resp) => {
    console.log(req.body.userID, req.body.N)
    transaction.lastN(req.body.userID, req.body.N, (err, result) => {
        if(err) resp.send(JSON.stringify({error : true, message : "Unable to fetch transaction details"}))
        else resp.send(JSON.stringify({error : false, result : result}))
    })
})

router.post('/create', (req, resp) => {
    transaction.create(req.body, (err, result) => {
        if(err) resp.send(JSON.stringify({error : true, message : "Unable to fetch transaction details"}))
        else resp.send(JSON.stringify({error : false, result : result}))
    })
})

module.exports.Transaction = router