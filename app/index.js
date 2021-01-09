const express = require('express')
const bodyParser = require('body-parser')
const router = require('./config/routes').router

const app = express()
app.use(bodyParser.json())

app.use(express.static(__dirname + "/app"))

app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Authorization, Content-Length");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');

    if(req.method == 'OPTIONS') {
      res.send(204);
      //next();
    } else {
      next();
    }

    //res.send(200);
});

//init the database 
app.use('/', router)


app.get('/', (req, resp) => {
  resp.sendFile(__dirname +"/app/index.html")
})



app.listen(process.env.PORT, process.env.HOST, () => {
    console.log("Server running ....")
})