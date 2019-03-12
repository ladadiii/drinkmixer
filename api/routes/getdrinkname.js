const express = require ('express');
const router = express.Router();
const mysql = require('mysql')
const con = require('../../db');

var drinkname = []
var seen = {};
var newArr = [];



router.get('/getdrinkname', (req, res, next) => {

    function remove_duplicates_safe(arr) {
        
        for (var i = 0; i < arr.length; i++) {
            if (!(arr[i] in seen)) {
                newArr.push(arr[i]);
                seen[arr[i]] = true;
            }
        }
        console.log(newArr)
    
    }

    con.query('SELECT * FROM drinkmixer.drinkingredient', function (err, result, fields){
        if (err) throw err;
        //console.log(result.length)
        //console.log(result[1].name)
        var i;

        drinkname=[]

        for (i = 0; i < result.length; i++) { 
            //botlist.push(result[i].name)
            let temp = {
                "id": result[i].idDrinkIngredient,
                "drinkName":result[i].drinkName
            }

            drinkname.push(temp)
        }

        remove_duplicates_safe(drinkname)
        

        res.status(200).json(drinkname)
    })
})




module.exports = router
