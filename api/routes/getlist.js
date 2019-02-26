const express = require ('express');
const router = express.Router();
const mysql = require('mysql')
const con = require('../../db');

var botlist = []
var seen = {};
var ret_arr = [];

router.get('/getlist', (req, res, next) => {

    function remove_duplicates_safe(arr) {
        
        for (var i = 0; i < arr.length; i++) {
            if (!(arr[i] in seen)) {
                ret_arr.push(arr[i]);
                seen[arr[i]] = true;
            }
        }
        console.log(ret_arr)
    
    }

    con.query('SELECT * FROM drinkmixer.bottlelist', function (err, result, fields){
        if (err) throw err;
        console.log(result.length)
        //console.log(result[1].name)
        var i;
        for (i = 0; i < result.length; i++) { 
            botlist.push(result[i].name)
        }
        remove_duplicates_safe(botlist)
        res.status(200).json({
            message:ret_arr
        })
    })
})




module.exports = router
