import {DataCollector, LocalStorage} from './basic'


function login(email, password, ui_callback) {
    new DataCollector('/user/auth', (result) => {
        console.log(result)
        if(!result.error && result.result.length !== 0) {
            var jsonString = JSON.stringify(result.result[0])
            console.log(jsonString)
            new LocalStorage().add("login", jsonString)
            ui_callback(result.result[0])
        } else {
            ui_callback(null)
        }
    }).collect({email : email, password : password})
}

function checkStorage() {
    var ls = new LocalStorage()
    console.log(ls.check("login"))
    if(ls.check("login")) 
        return JSON.parse(localStorage.getItem("login"))
    return null
}

export {checkStorage, login}

