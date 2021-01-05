
import config from './config.json'

class DataCollector {
    constructor(route, callback) {
        this.route = route
        this.callback = callback
    }

    collect(postData) {
        console.log(postData)
        fetch(config.host + this.route, {
            headers : {
                "Content-Type" : "application/json",
                "Accept" : "application/json"
            },
            mode : 'cors',
            method : 'post',
            body : JSON.stringify(postData)
        }).then((data) => data.json()).then((data) => {
            this.callback(data)
        })
    }
}

class LocalStorage {
    add(k, v) {
        localStorage.setItem(k, v)
    }

    delete(k) {
        localStorage.removeItem(k)
    }

    get(k) {
        localStorage.getItem(k)
    }

    check(k) {
        if(localStorage.getItem(k) == null) return false
        return true
    }
}

export {LocalStorage, DataCollector}