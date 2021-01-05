const mongodb = require('mongodb')
const assert = require('assert')
const createSchema = require('../models/Schema').createSchemas

var config = {
    host : process.env.MONGO_HOST,
    dbName : process.env.MONGO_DB
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