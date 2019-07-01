import { DataCollector } from "./basic";

function perMonth(userID, productID, month, year, callback) {
    new DataCollector('/transaction/perMonth', (result) => {
        if(!result.error) callback(result.result)
    }).collect({
        userID : userID, 
        productID : productID,
        month : parseInt(month),
        year : year
    })
}

function proprtionPerMonth(userID, month, year, callback) {
    new DataCollector('/transaction/proportionMonth', (result) => {
        if(!result.error) callback(result.result)
    }).collect({
        userID : userID,
        month : month,
        year : year
    })
}

function perProductSummary(userID, productID, year, callback) {
    new DataCollector('/transaction/perProductSummary', (result) => {
        if(!result.error) callback(result.result)
    }).collect({
        userID : userID,
        productID : productID,
        year : year
    })
}

function yearWise(userID, year, callback) {
    new DataCollector('/transaction/yearWise', (result) => {
        if(!result.error) callback(result.result)
    }).collect({
        userID : userID,
        year : year
    })
}

function monthWise(userID, productID, month, year, callback) {
    new DataCollector('/transaction/monthWise', (result) => {
        if(!result.error) callback(result.result)
    }).collect({
        userID : userID,
        month : month,
        year : year,
        productID : productID
    })
}

function productWise(userID, month, year, callback) {
    new DataCollector('/transaction/productProportion', (result) => {
        if(!result.error) callback(result.result)
    }).collect({
        userID : userID,
        month : month,
        year : year
    })
}


export {perMonth, proprtionPerMonth, perProductSummary, yearWise, monthWise, productWise}