const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser= require('body-parser')
const mysql = require('mysql')
const router = express.Router()

const productRoutes = require('./api/routes/product');
const orderRoutes = require('./api/routes/order');
const reset = require('./api/routes/test1');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use((req,res,next) =>{
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', '*')
    next()
})


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

router.post('/',(req,res,next) => {
    const error = new Error('Not found')
    error.status=404
    next(error)
    


    const con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Eddeal00",
        database: 'drinkmixer'
    })

    const drinkname=req.body.drinkname

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


    

    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        con.query('SELECT * FROM drinkmixer.drinkingredient WHERE drinkName = \''+drinkname+ '\';', function (err, result, fields) {
            if (err) throw err;

            
            if (result[0]===undefined) {
                console.log("drink not found")
            }
            else{
                drinkrecipe = result[0]
                console.log(result)
                console.log('checking 1st ingredient. no of rows returned by query:'+ result.length) 

                con.query(q + drinkrecipe.bottlelist_idBottleList ,function(err,result,fields){
                    if (err) throw err;
                    if(result[0]===undefined){
                        console.log("serve")
                        sorting()
                        res.end()
                        res.json({
                            error:{
                                message:"query1 "
                            }
                        })
                    }
                    else{
                        bot.slot = result[0].idLoadedBottles
                        bot.ml = drinkrecipe.ml
                        console.log(bot.slot)
                        console.log(bot.ml)

                        con.query(q + drinkrecipe.bottlelist_idBottleList1 ,function(err,result,fields){
                            if (err) throw err;
                            if(result[0]===undefined){
                                console.log("serve drink")
                                sorting()
                                res.end()
                                res.json({
                                    error:{
                                        message:"query2 "
                                    }
                                })
                            }
                            else{
                                console.log('ika duha ka bottle')
                                bot1.slot = result[0].idLoadedBottles
                                bot1.ml = drinkrecipe.ml1
                                console.log(bot1.slot)
                                console.log(bot1.ml)

                                con.query(q + drinkrecipe.bottlelist_idBottleList2 ,function(err,result,fields){
                                    if (err) throw err;
                                    if(result[0]===undefined){
                                        console.log("serve drink")
                                        sorting()
                                        res.end()
                                        res.json({
                                            error:{
                                                message:"query3 "
                                            }
                                        })
                                    }
                                    else{
                                        console.log('ika 3 ka bottle')
                                        bot2.slot = result[0].idLoadedBottles
                                        bot2.ml = drinkrecipe.ml2
                                        console.log(bot2.slot)
                                        console.log(bot2.ml)


                                        con.query(q + drinkrecipe.bottlelist_idBottleList3 ,function(err,result,fields){
                                            if (err) throw err;
                                            if(result[0]===undefined){
                                                console.log("serve drink")
                                                sorting()
                                                res.end()
                                                res.json({
                                                    error:{
                                                        message:"query 4 "
                                                    }
                                                })
                                            }
                                            else{
                                                console.log('ika 4 ka bottle')
                                                bot3.slot = result[0].idLoadedBottles
                                                bot3.ml = drinkrecipe.ml3
                                                console.log(bot3.slot)
                                                console.log(bot3.ml)



                                                con.query(q + drinkrecipe.bottlelist_idBottleList4 ,function(err,result,fields){
                                                    if (err) throw err;
                                                    if(result[0]===undefined){
                                                        console.log("serve drink")
                                                        sorting()
                                                        res.end()
                                                        res.json({
                                                            error:{
                                                                message:"quer5 "
                                                            }
                                                        })
                                                    }
                                                    else{
                                                        console.log('ika 5 ka bottle')
                                                        bot4.slot = result[0].idLoadedBottles
                                                        bot4.ml = drinkrecipe.ml3
                                                        console.log(bot4.slot)
                                                        console.log(bot4.ml)



                                                        con.query(q + drinkrecipe.bottlelist_idBottleList5 ,function(err,result,fields){
                                                            if (err) throw err;
                                                            if(result[0]===undefined){
                                                                console.log("serve drink")
                                                                sorting()
                                                                res.end()
                                                                res.json({
                                                                    error:{
                                                                        message:"query6 "
                                                                    }
                                                                })
                                                            }
                                                            else{
                                                                console.log('ika 6 ka bottle')
                                                                bot5.slot = result[0].idLoadedBottles
                                                                bot5.ml = drinkrecipe.ml3
                                                                console.log(bot5.slot)
                                                                console.log(bot5.ml)


                                                                

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
    })



    function sorting (){
        array = [bot,bot1,bot2,bot3,bot4,bot5];
        array.sort(function(a, b) { 
        return a.slot - b.slot;
        })
        console.log(array)

        var spawn = require("child_process").spawn; 
        var process = spawn('python',["./test.py", 
                                returnML(0),
                                returnML(1),
                                returnML(2),
                                returnML(3),
                                returnML(4),
                                returnML(5)] ); 
    
        process.stdout.on('data', function(data) { 
            res.status(200).json(data.toString())
            console.log(data.toString()); 
        } ) 
       
        //res.send(data.toString());

        

    }



function returnML(index) {
    return array[index].ml
}

})



app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/test1', reset);
app.use('/server',router)


app.use((req,res,next) => {
    const error = new Error('Not found')
    error.status=404
    next(error)
    
})

app.use((req, res, next) => {
    res.status(err.status || 500)
    res.json({
        error:{
            message:error.message
        }
    })
})


module.exports = app;