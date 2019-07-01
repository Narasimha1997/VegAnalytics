var express = require('express')

var router = express.Router()
var mongotoCsv = require('mongo-to-csv')


var exportOptions = [
    {
        database: 'VegAnalytics', 
        collection: 'products', 
        fields: ['_id', 'userID', 'name', 'cost', 'quantity'], 
        output: __dirname + '/app/products.csv'
    } ,
    {
        database: 'VegAnalytics', 
        collection: 'transactions', 
        fields: ['userID','productID', 'cost', 'quantity', 'date', 'month', 'year'], 
        output: __dirname + '/app/transactions.csv', 
    }
]

router.get('/products.csv', (req, resp) => {
    mongotoCsv.export(exportOptions[0], (err, result) => {
        if(err) resp.send(JSON.stringify({error : true, message : "Failed export"}))
        else resp.sendFile(exportOptions[0].output)
    })
})

router.get('/transactions.csv', (req, resp) => {
    mongotoCsv.export(exportOptions[1], (err, result) => {
        if(err) resp.send(JSON.stringify({error : true, message : "Failed export"}))
        else resp.sendFile(exportOptions[1].output)
    })
})

module.exports.Export = router

