var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');


router.post('/register', (req, res) => {
    var bd = req.app.get("bd");
    var user = {
        nombre: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        token: jwt.sign({ user: req.body.username }, 'shhhhh')
    }
    bd.usuarios.push(user);
    res.json({ success: true, msg: "Usuario registrado" });
});


router.post('/login', (req, res) => {
    var bd = req.app.get("bd");
    console.log(req.body);
    var user = bd.usuarios.find((element, index, array) => {
        return (element.email == req.body.email && element.password == req.body.password);
    });

    setTimeout(() => {
        if (user != undefined) {

            res.json({
                success: true,
                msg: "Usuario logeado con exito",
                authUser: user
            });
        } else {
            res.json({
                success: false,
                msg: "Usuario logueo fallo",
                authUser: null
            });
        }
    }, 1000);


});

module.exports = router;