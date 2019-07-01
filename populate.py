from pymongo import MongoClient
import random

DB_NAME = "VegAnalytics"

COLLECTIONS = ["user", "products", "transactions"]

def init_connection() :

    connection = MongoClient('mongodb://localhost:27017')
    return connection[DB_NAME]

def create_branches(db) :

    user1 = {'name' : "Royal Mart -1", 'email' : "royalmartadmin1@gmail.com", 'password' : "Narasima", 'address' : "Banashankari, Bangalore", "phone" : '9611818690'}
    user2 = {'name' : "Royal Mart -2", 'email' : "royalmartadmin2@gmail.com", 'password' : "Narasimha", 'address' : "JP Nagar, Bangalore", "phone" : "9611818690"}

    result = db.user.insert_many([user1, user2])

    return result.inserted_ids


def create_products(db, userID) :

    products = [
        {"userID" : userID, "name" : "Tomato", "cost" : 20., "quantity" : 50.},
        {"userID" : userID, "name" : "Mango", "cost" : 30., "quantity" : 60.},
        {"userID" : userID, "name" : "Ketchup", "cost" : 10., "quantity" : 40.},
        {"userID" : userID, "name" : "Bread", "cost" : 32., "quantity" : 30.},
        {"userID" : userID, "name" : "Butter", "cost" : 49., "quantity" : 100.},
        {"userID" : userID, "name" : "Carrot", "cost" : 50., "quantity" : 56.},
        {"userID" : userID, "name" : "Milk", "cost" : 10., "quantity" : 50.}
    ]

    result = db.products.insert_many(products)

    return result.inserted_ids, products


def create_transactions(db, userID, products, productIDs, n_transactions_days = 365, n_transactions_per_day = 50) :

    day = 1; month = 1; year = 2018
    totalCost = 0

    transactions = []

    for i in range(n_transactions_days) :
        #random transactions per day :
        n_tx = random.randint(10, n_transactions_per_day)

        #transaction per day :
        for j in range(n_tx) :

            #create a transaction : 
            productID = random.choice(productIDs)
            index = productIDs.index(productID)

            #obtain product details :
            productPrice = products[index]['cost']
            quantity = float(random.randint(1, 10))
            cost = productPrice * quantity

            totalCost += cost

            tx = {"userID" : userID, "productID" : productID, "cost" : cost, "quantity" : quantity, "totalCost" : totalCost, "date" : day, "month" : month, "year" : year}
            transactions.append(tx)
            db.transactions.insert_one(tx)
        
        day = (day + 1) 

        if day > 31 :
            
            day = 1
            month +=1

        if month > 12 :

            year +=1
            month = 1
        

        #update the transactions
    print(transactions)


db = init_connection()

userId = create_branches(db)[0]

productIDs, products = create_products(db, str(userId))

create_transactions(db, str(userId), products, [str(productID) for productID in productIDs])

print("Populated data")
