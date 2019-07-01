var mongodb = require('mongodb')
var assert = require('assert')
var createSchema = require('../models/Schema').createSchemas

var config = {
    host : 'mongodb://localhost:27017',
    dbName : 'VegAnalytics'
}

class Database {
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
            createSchema(this.db)
        }) 
    }
}

module.exports.Database = Database