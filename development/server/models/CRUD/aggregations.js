
var Transaction = require('./Transactions').Transaction

var transaction = new Transaction()

function profitPerDay(userID, productID, month, year, callback) {
    var query = [
        {$match : {"userID" : userID, "month" : month, "year" : year, "productID" : productID}},
        {$group : {_id : "$date", count : {$sum : "$cost"}, tx : {$sum : 1}}}
    ]

    transaction.aggregate(query, callback);
}

function profitPerMonth(userID, productID, year, callback) {
    console.log(userID, productID, year)
    var query = [
        {$match : {"userID" : userID, "year" : year, "productID" : productID}},
        {$group : {_id : "$month", transactions : {$sum : 1}, profit : {$sum : "$cost"}, quantity : {$sum : "$quantity"}}},
        {$sort : {_id : 1}}
    ]

    transaction.aggregate(query, callback)
}

function profitProportionMonth(userID, month, year, callback) {
    var query = [
        {$match : {"userID" : userID, "month" : month, "year" : year}},
        {$group : {_id : "$productID", profit : {$sum : "$cost"}}},
    ]

    transaction.aggregate(query, (err, result) => {
        if(!err) {
            var total = 0
            for(var i = 0; i < result.length; i++) total += result[i].profit

            var modified_result = {total : total, result : result}

            callback(err, modified_result)
        }
    })
}

//Related to transactions : 

function getTransactionHistory(userID, year, callback) {
    var query = [
        {$match : {"userID" : userID, "year" : year}},
        {$group : {_id : "$month", transactions : {$sum : 1}}},
        {$sort : {_id : 1}}
    ]
    transaction.aggregate(query, callback)
}

function getTransactionPerMonth(userID, productID, month, year, callback) {
    var query = [
        {$match : {"userID" : userID, "productID" : productID,  "year" : year, "month" : month}},
        {$group : {_id : "$date", count : {$sum : 1}}},
        {$sort : {_id : 1}}
    ]

    transaction.aggregate(query, callback)
}

function productSharePerMonth(userID, month, year, callback) {
    var query = [
        {$match : {"userID" : userID, year : year, month : month}},
        {$group : {_id : "$productID", counts : {$sum : 1}}}
    ]

    transaction.aggregate(query, callback)
}

module.exports = {
    profitPerDay, profitPerMonth, profitProportionMonth, productSharePerMonth, getTransactionHistory, getTransactionPerMonth
}

