var mongodb = require('mongodb')
var ObjectID = require('mongodb').ObjectID
var assert = require('assert')

const config = {
    host : process.env.MONGO_HOST,
    dbName : process.env.MONGO_DB
}

class Transaction {
    constructor() {
        this.db = null;
        this.createConnection()
    }
    createConnection(){
        const client = mongodb.MongoClient(config.host)
    
        client.connect((err) => {
            assert.equal(null, err)
            console.log("Connected to local mongodb instance " + config.host)
            this.db = client.db(config.dbName)

            //create a test collection : 
        }) 
    }

    create(object, callback) {
        this.user = this.db.collection("transactions")
        this.user.insert(object, (err, result) => {
            callback(err, result)
        })
    }

    update(objectID, newData, callback) {
        this.user = this.db.collection("transactions")
        this.user.update({_id : ObjectID(objectID)}, {$set : newData}, (err, result) => {
            callback(err, result)
        })
    }

    delete(objectID, callback) {
        this.user = this.db.collection("transactions")
        this.user.deleteOne({_id : ObjectID(objectID)}, (err, result) => {
            callback(err, result)
        })
    }

    read(filters, callback) {
        this.user = this.db.collection("transactions")
        this.user.find(filters, (err, result) => {
            callback(err, result)
        })
    }


    aggregate(pipeline, callback) {
        this.user = this.db.collection("transactions")
        this.user.aggregate(pipeline, (err, result) => {
            if(!err) {
                result.toArray((err, result) => {
                    callback(err, result)
                })
            }
        })
    } 

    lastN(userID, N, callback) {
        this.user = this.db.collection("transactions")
        this.user.find({userID : userID}).sort("_id", -1).limit(N).toArray((err, result) => {
                    callback(err, result)
            })
        }
}


module.exports.Transaction = Transaction