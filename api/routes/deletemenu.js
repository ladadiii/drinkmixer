const express = require ('express');
const router = express.Router();
const mysql = require('mysql')
const con = require('../../db');

router.post('/deletemenu', (req, res, next) => {
    drinkname = req.body.menu
    con.query('DELETE FROM drinkmixer.drinkingredient WHERE drinkName = \''+drinkname+ '\';', function (err, result, fields) {
        if (err) throw err;

        if (result.length === 0){
            console.log("cannot delete drink")
            res.status(400).json({
                errorMessage:'your drink does not exist, cannot delete drink'
            })
        }
        else{
            console.log("Number of records deleted: " + result.affectedRows);
            res.status(200).json({
                message:'menu deleted'
            })
        }
        

    })
})


module.exports = router
