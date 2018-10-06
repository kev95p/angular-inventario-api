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



module.exports = router;