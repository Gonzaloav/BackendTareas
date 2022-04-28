import { users } from "../models/usersModels.mjs";

function decodeAuthBasic(headerContent) {
    try {
        const [method, token ] = headerContent.split (" ");
        const tokenString = atob (token);
    }
    
}



export function authMieddleware(request, response, next) {
    try{

        const {method, username, password } = decodeAuthBasic (request.headers.authorization); 

        if (method != "Basic") throw "Método de autorización no válido. Use Básico en su lugar."

        const user = users.find (
            item => item.name === username && item.password === password
        )

        if (user ) {
            next ()
        }   else {
            throw "Error en la autorización."
        }

}   catch (err) {
        console.error (err);
        response.sendStatus (401);
        return; 
    }
}

// Crear la autorización
/**export function authorizedMiddleware( request, response, next ){
    if ( request.headers.authorized === true ) {
        next()   }  else {   response.sendStatus(401)    }} */

