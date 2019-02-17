const express = require ('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message:'Get request'
    })
})

router.post('/',(req, res, next) => {
    const product = {
        name: req.body.name,
        price:req.body.price
    }
    res.status(201).json({
        message:"handling post",
        createdProduct: product
    })
})

router.get('/:productID', (req, res, next) => {
    const id = req.params.productID
    if (id === 'special') {
        res.status(200).json({
            message:'special id',
            id: id
        })
    } 
    else {
        res.status(200).json({
            message:'id'
        })
    }

})

router.patch('/:productID', (req, res, next) => {
    res.status(200).json({
        message:'update'
    })
})

router.delete('/:productID', (req, res, next) => {
    res.status(200).json({
        message:'delete'
    })
})


module.exports = router;