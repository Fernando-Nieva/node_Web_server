import { envs } from './config/env.js'
import {startServer} from './server/server.js'

const main = () => {
    startServer({
        port:envs.PORT,
        public_path:envs.PUBLIC_PATH
    })
};

//Funcion Autnostica autoconvocada
//agnostica porque no tiene nombre
//autoconvocada porque la ejecutamos con los parentesis

(async()=>{

    main()
})()
