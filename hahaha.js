const port = process.env.PORT || 8080;
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser= require('body-parser')
const mysql = require('mysql')
const router = express.Router()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use((req,res,next) =>{
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', '*')
    next()
})

arr=["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl"]
var seen = {};
var ret_arr = [];

function remove_duplicates_safe(arr) {
    
    for (var i = 0; i < arr.length; i++) {
        if (!(arr[i] in seen)) {
            ret_arr.push(arr[i]);
            seen[arr[i]] = true;
        }
    }
    console.log(ret_arr)

}

app.listen(port,(err)=>{
    console.log("running at"+ port)

    remove_duplicates_safe(arr)

    
})