const express = require('express');
const path = require('path');
const fs = require('fs');
// Se crea una instancia de router para gestionar las rutas del módulo usuario. 
const router = express.Router();  
                                
router.get('/', (req, res)=>{    
    res.render('index');
});

router.post('/iniciarSesion',(req, res)=>{
    let userF = req.body.user;
    let passwdF = req.body.passwd;
    
    let urlFile = path.join(__dirname,'../data/usuarios.json');
    let users = fs.readFileSync(urlFile);
    let find = false;
    users = JSON.parse(users);

    for(i in users) {
      if(users[i].name === userF && users[i].passwd === passwdF){
          find=true;            
          break;   
       }
       else
         find=false;
    };
 
    if (find){
      res.render('users/inicio',{user:userF});
    }  
    else
      res.write('usuario no registrado');  
    res.end();   
 });
 
 module.exports = router;