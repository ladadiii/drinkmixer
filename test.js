const port = process.env.PORT || 8080;
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser= require('body-parser')
const mysql = require('mysql')
const router = express.Router()

const con = require('./db');
const bottlelist = require('./api/routes/bottlelist');
const getmenu = require('./api/routes/getmenu');
const getlist = require('./api/routes/getlist');
const addmenu = require('./api/routes/addmenu');
const getdrinkname = require('./api/routes/getdrinkname');
const deletemenu = require('./api/routes/deletemenu');
const loadbottles = require('./api/routes/loadbottles');
const deletebottle = require('./api/routes/deletebottle');



app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use((req,res,next) =>{
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', '*')
    next()
})


con.connect(function(err) {

    if (err) throw err;
    console.log("Connected!");
})



function start(drinkName)
{
    var drinkrecipe
    var bot = {
        slot: 7,
        ml: 0
    }
    var bot1 = {
        slot: 7,
        ml: 0
    }
    var bot2 = {
        slot: 7,
        ml: 0
    }
    var bot3 = {
        slot: 7,
        ml: 0
    }
    var bot4 = {
        slot: 7,
        ml: 0
    }
    var bot5 = {
        slot: 7,
        ml: 0
    }

    var array=[]

    
    const drinkname=drinkName

    q = "SELECT idLoadedBottles FROM drinkmixer.loadedbottles where bottlelist_idBottleList ="

    drinkrecipe
    bot = {
        slot: 7,
        ml: 0
    }
    bot1 = {
        slot: 7,
        ml: 0
    }
    bot2 = {
        slot: 7,
        ml: 0
    }
    bot3 = {
        slot: 7,
        ml: 0
    }
    bot4 = {
        slot: 7,
        ml: 0
    }
    bot5 = {
        slot: 7,
        ml: 0
    }

    con.query('SELECT * FROM drinkmixer.drinkingredient WHERE drinkName = \''+drinkname+ '\';', function (err, result, fields) {
        if (err) throw err;
        
        if (result.length === 0){
            console.log("your drink does not exist")
            // res.status(400).json({
            //     errorMessage:'your drink does not exist'
            // })
        }
        else{
            // res.status(201).json({
            //     successMessage:'drink found in menu'
            // })
            drinkrecipe = result[0]
            console.log(drinkrecipe)
            console.log('checking 1st ingredient. no of rows returned by query:'+ result.length) 

            con.query(q + drinkrecipe.bottlelist_idBottleList ,function(err,result,fields){
                if (err) throw err;
                console.log(drinkrecipe.bottlelist_idBottleList)
                if(result[0]===undefined && drinkrecipe.bottlelist_idBottleList !== 1){
                    // console.log("serve")
                    console.log("bottle not loaded1")
                    return 0
                }
                else {

                    if (drinkrecipe.bottlelist_idBottleList !== 1){
                    bot.slot = result[0].idLoadedBottles
                    bot.ml = drinkrecipe.ml
                    console.log(bot.slot)
                    console.log(bot.ml)
                    }
                    else{
                        console.log("skipping because ingredient 1 is empty")
                    }

                    console.log('Starting 2nd Query')
                    con.query(q + drinkrecipe.bottlelist_idBottleList1 ,function(err,result,fields){
                        if (err) throw err;
                        console.log(result[0])
                        console.log(drinkrecipe.bottlelist_idBottleList1)
                        if(result[0]===undefined && drinkrecipe.bottlelist_idBottleList1 !== 1){
                            // console.log("serve drink1")
                            console.log("bottle not loaded2")
                            return 0
                        }
                        else{ 
                            if (drinkrecipe.bottlelist_idBottleList1 !== 1){
                            console.log('ika duha ka bottle')
                            bot1.slot = result[0].idLoadedBottles
                            bot1.ml = drinkrecipe.ml1
                            console.log(bot1.slot)
                            console.log(bot1.ml)
                            }
                            else{
                                console.log("skipping because ingredient 2 is empty")
                            }
                            
                            console.log("starting 3rd Query")
                            con.query(q + drinkrecipe.bottlelist_idBottleList2 ,function(err,result,fields){
                                if (err) throw err;
                                if(result[0]===undefined && drinkrecipe.bottlelist_idBottleList2 !== 1){
                                    // console.log("serve drink2")
                                    console.log("bottle not loaded3")
                                    return 0
                                }
                                else {
                                    if(drinkrecipe.bottlelist_idBottleList2 !== 1) {
                                    console.log('ika 3 ka bottle')
                                    bot2.slot = result[0].idLoadedBottles
                                    bot2.ml = drinkrecipe.ml2
                                    console.log(bot2.slot)
                                    console.log(bot2.ml)
                                    }
                                    else{
                                        console.log("skipping because ingredient 3 is empty")
                                    }
                                    
                                    console.log("starting 4 Query")
                                    con.query(q + drinkrecipe.bottlelist_idBottleList3 ,function(err,result,fields){
                                        if (err) throw err;
                                        if(result[0]===undefined && drinkrecipe.bottlelist_idBottleList3 !== 1){
                                            // console.log("serve drink3")
                                            console.log("bottle not loaded4")
                                            return 0
                                        }
                                        else{
                                            if(drinkrecipe.bottlelist_idBottleList3 !== 1) {
                                            console.log('ika 4 ka bottle')
                                            bot3.slot = result[0].idLoadedBottles
                                            bot3.ml = drinkrecipe.ml3
                                            console.log(bot3.slot)
                                            console.log(bot3.ml)
                                            }
                                            else{
                                                console.log("skipping because ingredient 4 is empty")
                                            }
                                            
                                            console.log("starting 5 Query")
                                            con.query(q + drinkrecipe.bottlelist_idBottleList4 ,function(err,result,fields){
                                                if (err) throw err;
                                                if(result[0]===undefined && drinkrecipe.bottlelist_idBottleList4 !== 1){
                                                    // console.log("serve drink4")
                                                    console.log("bottle not loaded5")
                                                    return 0
                                                }
                                                else {
                                                    if (drinkrecipe.bottlelist_idBottleList4 !== 1) {
                                                    console.log('ika 5 ka bottle')
                                                    bot4.slot = result[0].idLoadedBottles
                                                    bot4.ml = drinkrecipe.ml3
                                                    console.log(bot4.slot)
                                                    console.log(bot4.ml)
                                                    }
                                                    else{
                                                        console.log("skipping because ingredient 5 is empty")
                                                    }
                                                    
                                                    console.log("starting 6 Query")
                                                    con.query(q + drinkrecipe.bottlelist_idBottleList5 ,function(err,result,fields){
                                                        if (err) throw err;
                                                        if(result[0]===undefined && drinkrecipe.bottlelist_idBottleList5 !== 1 ){
                                                            // console.log("serve drink5")
                                                            console.log("bottle not loaded6")
                                                            return 0
                                                        }
                                                        else {
                                                            if (drinkrecipe.bottlelist_idBottleList5 !== 1){
                                                            console.log('ika 6 ka bottle')
                                                            bot5.slot = result[0].idLoadedBottles
                                                            bot5.ml = drinkrecipe.ml3
                                                            console.log(bot5.slot)
                                                            console.log(bot5.ml)
                                                            sorting()
                                                            

                                                            return 1
                                                            }
                                                            else{
                                                                console.log("skipping because ingredient 6 is empty")
                                                                sorting()
                                                            }

                                                        }
                                                    })
                                                }
                                            })
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }        
    });
    

    function sorting (){
        array = [bot,bot1,bot2,bot3,bot4,bot5];
        array.sort(function(a, b) { 
        return a.slot - b.slot;
        })
        console.log(array)

        var spawn = require("child_process").spawn; 
        var process = spawn('python',["./testmotors.py", 
                                returnML(1,array),
                                returnML(2,array),
                                returnML(3,array),
                                returnML(4,array),
                                returnML(5,array),
                                returnML(6,array)] ); 
    
        process.stdout.on('data', function(data) { 
            //res.status(200).json(data.toString())
            console.log(data.toString()); 

        } ) 
        console.log("finished")

        
    }


    function returnML(index,array) {
        for(let i=0;i<array.length;i++){
            if(array[i].slot === index)
                return array[i].ml
        }
        return 0;
        
    }

}

router.post('/', (req, res, next) => {
    console.log(req.body.queryResult.parameters["drink"])
    start(req.body.queryResult.parameters["drink"])


    res.status(201).json({
        "fulfillmentText": "Please wait while I make your "+ req.body.queryResult.parameters["drink"],
        "fulfillmentMessages": [
            {
                "simpleResponses":{
                    "simpleResponses": [
                        {
                            "textToSpeech":"Please wait while I make your "+ req.body.queryResult.parameters["drink"],
                            "displayText":"Please wait while I make your "+ req.body.queryResult.parameters["drink"]
                        }
                    ]
                }
            }
        ],
        "source": "weebhook-sample"
        
    })
})


app.use('/', router)
app.use('/', bottlelist)
app.use('/', getmenu)
app.use('/', getlist)
app.use('/', addmenu)
app.use('/', getdrinkname)
app.use('/', deletemenu)
app.use('/', loadbottles)
app.use('/', deletebottle)




app.listen(port,(err)=>{
    console.log("running at"+ port)
    
    
})