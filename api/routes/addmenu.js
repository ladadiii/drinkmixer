const express = require ('express');
const router = express.Router();
const mysql = require('mysql')
const con = require('../../db');

router.post('/addmenu', (req, res, next) => {
    name = req.body.name
    bottlelist_idBottleList = req.body.bottlelist_idBottleList
    ml = req.body.ml
    bottlelist_idBottleList1 = req.body.bottlelist_idBottleList1
    ml1 = req.body.ml1
    bottlelist_idBottleList2 = req.body.bottlelist_idBottleList2
    ml2 = req.body.ml2
    bottlelist_idBottleList3 = req.body.bottlelist_idBottleList3
    ml3 = req.body.ml3
    bottlelist_idBottleList4 = req.body.bottlelist_idBottleList4
    ml4 = req.body.ml4
    bottlelist_idBottleList5 = req.body.bottlelist_idBottleList5
    ml5 = req.body.ml5

    insertQuery = 'insert into drinkmixer.drinkingredient (drinkName, bottlelist_idBottleList, ml,bottlelist_idBottleList1, ml1,bottlelist_idBottleList2, ml2,bottlelist_idBottleList3, ml3,bottlelist_idBottleList4, ml4,bottlelist_idBottleList5, ml5) values (\''+name+'\',' +bottlelist_idBottleList+','+ml+','+bottlelist_idBottleList1+','+ml1+','+bottlelist_idBottleList2+','+ml2+','+bottlelist_idBottleList3+','+ml3+','+bottlelist_idBottleList4+','+ml4+','+bottlelist_idBottleList5+','+ml5 +');'
    

    console.log(insertQuery)
    con.query(insertQuery, function (err, result, fields){
        if (err) throw err;

        res.status(201).json({
            successMessage:'menu added to database'
        })

    })
})





module.exports = router