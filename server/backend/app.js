const path = require('path');
const express = require('express');

const index = require('./routes/index');
const users = require('./routes/users');

const app = express();
const PORT = process.env.PORT || 3000;

console.log(__dirname);
// Ruta para recursos estáticos
app.use(express.static(path.join(__dirname,'../frontend/public')));
app.use(express.urlencoded({extended: false}));

// view
app.set('views',path.join(__dirname,'../frontend/views'));
app.set('view engine','ejs');

// Rutas del proyecto
app.use('/', index);
app.use('/users', users);
app.use('/recuperar', (req, res) => {
    res.render('recuperar');
  });

//Se ejecuta el servidor en el puerto establecido: "localhost:3000"
app.listen(PORT, ()=>{
    console.log(`Proyectito ejecutandose en el localhost puerto ${PORT}`);
})