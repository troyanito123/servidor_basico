require('./config/config');

import bodyParser from 'body-parser';
import cors from 'cors'
import { Server } from './classes/server';
import fileUpload = require('express-fileupload');
import routes from './routes';


// const server = Server.init( Number(process.env.PORT) ); 
const server = Server.instance;

// Body parser
server.app.use( bodyParser.urlencoded( {extended: true} ) );
server.app.use( bodyParser.json() );

//fileuploader
server.app.use(fileUpload());

//configurar CORS
server.app.use(cors({origin: true, credentials: true}));

//rutas de mi aplicacion
server.app.use( routes );

//conectar DB



//levantar expres
server.start( () =>{
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
})

