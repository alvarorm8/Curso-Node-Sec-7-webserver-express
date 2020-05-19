const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

/* Configuración de Heroku
Variable para el puerto: si se corre en local no existe, por lo que se pone 3000
Inicio: variable start en package.json para que Heroku sepa iniciar la aplicación.
Para iniciarla, se pone en la consola npm start
Nodemon: variable en el package.json. Para iniciarla npm run nodemon*/
const port = process.env.PORT || 3000;
/*
Cuando el path sea un /, las peticiones ejecutan
la función definida.

Es decir, este sirve para las peticiones a http://localhost:3000/

Un middleware es una instrucción o callback que se ejecuta
siempre, sin importar la url que se mande.
*/
app.use(express.static(__dirname + '/public')); //middleware
//Express hbs
hbs.registerPartials(__dirname + '/views/partials'); //__dirname es el path a la carpeta donde está el proyecto
app.set('view engine', 'hbs');


/*
En la carpeta public se pone todo lo que va a ser de dominio
público. Se pueden poner html, json, etc.
Si quiero acceder por ejemplo a home.html:
    http://localhost:3000/home.html

*/

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'alvAro', //se pone mal para probar la funcionalidad del helper capitalizar
    });
});

app.get('/about', (req, res) => {
    res.render('about', { //about.hbs
    });
});

// app.get('/', (req, res) => {

//     let salida = {
//         nombre: 'Alvaro',
//         edad: 24,
//         url: req.url
//     }
//     res.send(salida); //send detecta que es un objeto y lo serializa a json
//     //res.send('Hola mundo')
// });

/*
Este servirá para las peticiones a http://localhost:3000/data
*/
// app.get('/data', (req, res) => {
//     res.send('Hola data')
// });

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}...`);
});