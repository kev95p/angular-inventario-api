var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');


router.get('/getAll', (req, res) => {
    var bd = req.app.get("bd");
    setTimeout(() => {
        res.json({
            success: true,
            msg: "Todos los productos",
            products: bd.productos
        })
    }, 700);
});

router.post('/save', (req, res) => {
    var bd = req.app.get("bd");
    var product =  req.body;
    bd.productos.push(product);
    res.json({
        success:true
    });
});



module.exports = router;