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
    var last = bd.productos[bd.productos.length-1];
    product["id"] = last.id + 1;
    bd.productos.push(product);
    res.json({
        success:true
    });
});

router.post('/delete/:id', (req, res) => {
    var bd = req.app.get("bd");
    var id = req.params.id
    var index = -1;
    bd.productos.forEach((val,index,arr)=>{
        if(val["id"] == id){
            index = id;
        }
    });
    if(index != -1){
        bd.productos.splice(index, 1);
    }

    res.json({
        success:true
    });
});



module.exports = router;