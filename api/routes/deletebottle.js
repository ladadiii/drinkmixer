const express = require ('express');
const router = express.Router();
const mysql = require('mysql')
const con = require('../../db');


router.post('/deletebottle', (req, res, next) => {
    bottlename = req.body.name
    console.log("delete"+bottlename)
    con.query('DELETE FROM drinkmixer.bottlelist WHERE name = \''+bottlename+ '\';', function (err, result, fields){
        if (err) throw err;
        console.log(result.length)
        if (result.length === 0){
            console.log("cannot delete bottle")
            res.status(400).json({
                errorMessage:'your bottle does not exist, cannot delete drink'
            })
        }
        else{
            console.log("Number of records deleted: " + result.affectedRows);
            res.status(200).json({
                message:'bottle deleted'
            })
        }
       
        
    })
    
})



module.exports = router
