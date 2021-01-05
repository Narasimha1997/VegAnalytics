const mongo = require('mongodb')

var validationRules = {
    user : {
        $jsonSchema : {
            bsonType : "object",
            required : ["name", "email", "phone", "address", "password"],
            properties : {
                name : {
                    bsonType : "string",
                    description : "Name must be a string and is required"
                }, 
                email : {
                    bsonType : "string",
                    description : "email is required",
                }, 
                phone : {
                    bsonType : "string",
                    description : "Must be 10 digit"
                },
                address : {
                    bsonType : "string",
                    description : "Address of the receipient"
                },
                password : {
                    bsonType : "string",
                    description : "Password of the user"
                },
            }
        }
    },
    products : {
        $jsonSchema : {
            bsonType : "object",
            required : ["userID", "name", "cost", "quantity"],
            properties : {
                userID : {
                    bsonType : 'string'
                },
                name : {
                    bsonType : 'string'
                },
                cost : {
                    bsonType : "double",
                    minimum : 0,
                },
                quantity : {
                    bsonType : "double",
                    minimum : 0
                }
            }
        }
    },
    transactions : {
        $jsonSchema : {
            bsonType : "object",
            required : ["userID", "prodcutID", "quantity", "cost", "date", "month", "year", "totalCost"],
            properties : {
                userID : {
                    bsonType : "string"
                }, 
                productID : {
                    bsonType : "string"
                }, 
                quantity : {
                    bsonType : 'double',
                    minimum : 0
                },
                cost : {
                    bsonType : 'double',
                    minimum : 0
                },
                date : {
                    bsonType : "int",
                },
                month : {
                    bsonType : "int",
                },
                year : {
                    bsonType : "int",
                },
                totalCost : {
                    bsonType : "double"
                }
            }
        }
    }
}

var createSchemas = (dbInstance) => {
    var db = dbInstance

    db.createCollection("user", {
        validator : validationRules.user
    })

    db.createCollection("products", {
        validator : validationRules.products
    })

    db.createCollection("transactions")
}

module.exports.createSchemas =  createSchemas