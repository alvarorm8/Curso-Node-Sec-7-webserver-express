const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

/* Configuración de Heroku
Variable para el puerto: si se corre en local no existe, por lo que se pone 3000
Inicio: variable start en package.json para que Heroku sepa iniciar la aplicación.
Para iniciarla, se pone en la consola npm start
Nodemon: variable en el package.json. Para iniciarla npm run nodemon

Heroku trabaja en base a git, por lo que hay que crear el .gitignore,
se hace git init, git status para ver que queda por hacer,
git add ., git commit -m "Primer commit".

Tras esto es necesario solo la primera vez en un PC hacer
el comando heroku login, de manera que pide el correo y la 
contraseña.

Tras esto, podemos ir a la página de heroku y en la pestaña
Deploy del proyecto concreto, se hace heroku git:remote -a alvaro-webpage-node
y seguidamente, git push heroku master. 

Luego se instala todo lo necesario y me da un enlace que puedo compartir con gente
para que acceda a la aplicación: https://alvaro-webpage-node.herokuapp.com/.accordion

También, se puede hacer con heroku open.accordion

Si modifico la programación, se hace de nuevo el git add ., git commit, git push

En la pestaña Deploy de la aplicación en heroku están los comandos
necesarios para clonar el repositorio, hacer los cambios, etc.
*/
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