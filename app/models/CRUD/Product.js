const mongodb = require('mongodb')
const ObjectID = mongodb.ObjectID
const assert = require('assert')

const config = {
    host : process.env.MONGO_HOST,
    dbName : process.env.MONGO_DB
}

class Product {
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
        this.user = this.db.collection("products")
        this.user.insert(object, (err, result) => {
            callback(err, result)
        })
    }

    update(objectID, newData, callback) {
        this.user = this.db.collection("products")
        this.user.update({name : objectID}, {$set : newData}, (err, result) => {
            callback(err, result)
        })
    }

    delete(objectID, callback) {
        this.user = this.db.collection("products")
        this.user.deleteOne({name :  objectID}, (err, result) => {
            callback(err, result)
        })
    }

    read(filters, callback) {
        this.user = this.db.collection("products")
        this.user.find(filters, (err, result) => {
            callback(err, result)
        })
    }
}

module.exports.Product = Product