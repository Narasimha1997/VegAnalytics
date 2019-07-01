import { DataCollector } from "./basic";


function createProduct(userID, name, cost, quantity) {
    new DataCollector('/product/create', (result) => {
        if(!result.error) alert("Product create")
    }).collect({
        userID : userID,
        name : name,
        cost : parseFloat(cost) + 0.001,
        quantity : parseFloat(quantity) + 0.001
    })
}

function createTransaction(userID, productID, cost, quantity, totalCost, date, month, year) {
    new DataCollector('/transaction/create', (result) => {
        if(!result.error) alert("Transaction created")
    }).collect({
        userID : userID,
        productID : productID,
        cost : parseFloat(cost) + 0.001,
        quantity : parseFloat(quantity) + 0.001,
        totalCost : parseFloat(totalCost) + 0.001,
        date : date,
        month : month,
        year : year
    })
}

function getProductList(userID, callback) {
    new DataCollector("/product/getProducts", (result) => {
        if(!result.error) callback(result)
    }).collect({userID : userID})
}

function updateCost(productID, cost) {
    var cost_d = parseFloat(cost)
    new DataCollector("/product/updatePrice", (result) => {
        console.log(result)
        if(!result.error) alert("Product updated ")
    }).collect({objectID : productID, cost : cost_d})
}

function deleteProduct(productID, callback) {
    console.log(productID)
    new DataCollector("/product/delete", (result) => {
        console.log(result)
        if(!result.error) callback()
    }).collect({objectID : productID})
}

function getN(userID, N, callback) {
    new DataCollector("/transaction/getN", (result) => {
        if(!result.error) callback(result.result)
    }).collect({
        userID : userID,
        N : parseInt(N)
    })
}

export {getProductList, updateCost, deleteProduct, getN, createProduct, createTransaction}