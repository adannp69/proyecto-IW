const express = require('express');
const path = require('path');
const fs = require('fs');
const router = express.Router();  // Se crea una instancia de router para gestionar las rutas del
                                // módulo usuario. 
router.get('/', function(req, res, next) {
    let urlFile = path.join(__dirname,'../data/usuarios.json');

    let users = fs.readFileSync(urlFile);
    users = JSON.parse(users);

    res.render('users/allUsers',{lista:users});
});

module.exports = router;

router.get('/findUser', function(req, res, next) {
    // recuperar el parametro de la URL de la ruta
    // Localhost:3000/users/findUser?name=Carlos se coloca en el navegador
let nombre = req.query.name || '';

let urlFile = path.join(__dirname,'../data/usuarios.json');

let users = fs.readFileSync(urlFile);
users = JSON.parse(users);
datosUser ={};

for(user of users) {
    if(user.name === nombre) {
        datosUser.name = user.name;
        datosUser.email = user.email;
        break;
    }
}
// Desplegar la plantilla llamada getUser que muestra los datos del usuario que pasa como parámetro
// AQUI: Hacer el recorrido del json para encontrar el usuario
res.render('users/getUser',{usuario:datosUser})
console.log(nombre);
//localhost:3000/users/findUser?name='Carlos'
});