const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' }); //status 200 = OK

        let salida = {
                nombre: 'Alvaro',
                edad: 24,
                url: req.url
            }
            //res.write('Hola mundo');
        res.write(JSON.stringify(salida));
        res.end();
        /*se indica que acaba la respuesta 
        para que funcione.
        Para acceder se pone en un navegador http://localhost:8080/
        como página web.
        
        Si no se pone nada por defecto se crea como una página
        web, pero se pueden añadir cosas para que por ejemplo
        sea un json.*/
    })
    .listen(8080); //puerto 

console.log('Escuchando el puerto 8080');

/*
Esta sintaxis es bastante complicada y conforme se quiere
hacer algo más complejo aumentará mucho más. Por ello,
para solucionarlo, se creó el paquete express, que simplifica
la sintaxis utilizando también el mismo paquete http.
*/