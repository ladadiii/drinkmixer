const express = require ('express');
const router = express.Router();
const mysql = require('mysql')
const con = require('../../db');


router.post('/bottlelist', (req, res, next) => {
    bottlename = req.body.name
    console.log(bottlename)
    con.query('SELECT * FROM drinkmixer.bottlelist WHERE name = \''+bottlename+ '\';', function (err, result, fields){
        if (err) throw err;
        console.log(result.length)
        if (result.length === 1){
            console.log("bottle already in database")
            res.status(400).json({
                errorMessage:'bottle already in database'
            })
        }

        else {
            q = 'INSERT INTO bottlelist (name) VALUES (\''+bottlename+ '\');'
            console.log(q)
            con.query(q, function (err, result, fields){
                if (err) throw err;
                console.log("added") 
                res.status(201).json({
                    successMessage:'added'
                })  
            })
        }
        
    })
    
})



module.exports = router
