const express = require ('express');
const router = express.Router();
const mysql = require('mysql')
const con = require('../../db');


router.post('/loadbottles', (req, res, next) => {
    slot1 = req.body.slot1
    slot2 = req.body.slot2
    slot3 = req.body.slot3
    slot4 = req.body.slot4
    slot5 = req.body.slot5
    slot6 = req.body.slot6
    

    console.log("slots: "+slot1,slot2,slot3,slot4,slot5,slot6)

    var sql = "INSERT INTO drinkmixer.loadedbottles (idLoadedBottles,bottlelist_idBottleList) VALUES ('1', "+slot1+"),('2', "+slot2+"),('3', "+slot3+"),('4', "+slot4+"),('5', "+slot5+"),('6', "+slot6+");"
    console.log(sql)

    del= "DELETE FROM loadedbottles;"
    
    con.query(del, function (err, result, fields){
        if (err) throw err;
        else{
            res.status(201).json({
                successMessage:'loaded bottles updated'
            })

            con.query(sql, function (err, result, fields){
                if (err) throw err;
            })
        }
    })

})


module.exports = router
